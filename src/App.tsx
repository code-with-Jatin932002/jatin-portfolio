import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function ScrollManager() {
  const location = useLocation()

  useLayoutEffect(() => {
    // Every project details page must start from the top.
    if (location.pathname.startsWith('/projects/')) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    }
  }, [location.pathname])

  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Disable browser's automatic scroll restoration.
    // We handle scrolling ourselves.
    const previousScrollRestoration =
      window.history.scrollRestoration

    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration =
        previousScrollRestoration
    }
  }, [])

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false)

    const hash = window.location.hash

    if (!hash) {
      return
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({
            behavior: 'smooth',
          })
      })
    })
  }, [])

  return (
    <BrowserRouter>
      <ScrollManager />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              {isLoading && (
                <PageLoader
                  onComplete={handleLoaderComplete}
                />
              )}

              <Home />
            </>
          }
        />

        {/* Project Details */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App