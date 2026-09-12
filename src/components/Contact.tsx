import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import {
  Check,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

function Contact() {
  const { personal } = portfolioData

  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget

    setIsSending(true)
    setIsSuccess(false)
    setError('')

    try {
      const formData = new FormData(form)

      const response = await fetch(
        'https://formsubmit.co/ajax/ps667570@gmail.com',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        },
      )

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const result = await response.json()

      if (result.success === 'true' || result.success === true) {
        form.reset()

        setIsSuccess(true)

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        throw new Error('Message could not be sent')
      }
    } catch {
      setError(
        'Unable to send your message right now. Please try again.',
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05050d] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[130px]" />

        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <ScrollReveal className="mb-14 text-center">
          <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/5 px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.25em] text-purple-400">
            07 // REACH OUT
          </div>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Let's Build{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]">
              Something Great
            </span>
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </ScrollReveal>

        {/* Contact content */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <ScrollReveal delay={120} direction="left" className="h-full">
          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-7">
            {/* Neon border */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500" />

            <div className="relative">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Have a mission, role, or proposal in mind? Reach out through
                any of these channels or send me a message directly.
              </p>

              {/* Email */}
              <ContactItem
                icon={<Mail size={19} />}
                label="EMAIL ADDRESS"
                value={personal.email}
                iconClass="border-cyan-400/10 bg-cyan-400/10 text-cyan-400"
              />

              {/* Phone */}
              <ContactItem
                icon={<Phone size={19} />}
                label="PHONE CALL"
                value={personal.phone}
                iconClass="border-purple-400/10 bg-purple-400/10 text-purple-400"
              />

              {/* Location */}
              <ContactItem
                icon={<MapPin size={19} />}
                label="LOCATION"
                value={personal.location}
                iconClass="border-green-400/10 bg-green-400/10 text-green-400"
              />

              {/* Social links */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex gap-3">
                  <SocialButton
                    href={personal.linkedin}
                    label="LinkedIn"
                  >
                    <FaLinkedinIn size={17} />
                  </SocialButton>

                  <SocialButton
                    href={personal.github}
                    label="GitHub"
                  >
                    <FaGithub size={17} />
                  </SocialButton>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={240} direction="right" className="h-full">
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-400"
                >
                  FULL NAME
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  disabled={isSending}
                  className="w-full rounded-xl border border-white/10 bg-[#090914] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-400"
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  disabled={isSending}
                  className="w-full rounded-xl border border-white/10 bg-[#090914] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-400"
                >
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write details about your opportunity, project, or role..."
                  required
                  disabled={isSending}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#090914] px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Success message */}
              {isSuccess && (
                <div className="flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3.5 text-sm text-green-300">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400/15">
                    <Check size={17} />
                  </div>

                  <div>
                    <p className="font-semibold text-green-300">
                      Message sent successfully!
                    </p>

                    <p className="mt-0.5 text-xs text-green-400/70">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3.5 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.15)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <LoaderCircle
                      size={17}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  iconClass,
}: {
  icon: React.ReactNode
  label: string
  value: string
  iconClass: string
}) {
  return (
    <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-white/15 hover:bg-white/[0.04]">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${iconClass}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-[9px] tracking-[0.2em] text-slate-500">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-white">
          {value}
        </p>
      </div>
    </div>
  )
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#070711] text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]"
    >
      {children}
    </a>
  )
}

export default Contact