export type ProjectAccent =
  | 'cyan'
  | 'purple'
  | 'green'

export interface Project {
  number: string
  slug: string
  title: string
  description: string
  technologies: string[]
  accent: ProjectAccent

  github: string
  live: string

  overview: string
  problem: string
  keyFeatures: string[]
  roleAccess: string[]
  workflow: string[]
  contribution: string[]
  architecture: string[]
}

export const portfolioData = {
  personal: {
    name: 'Jatin Sharma',
    firstName: 'Jatin',
    lastName: 'Sharma',
    role: 'Full Stack Developer',
    availability: 'AVAILABLE FOR HIRE',

    description:
      'Building scalable web applications with React, Node.js, AWS, SQL, TypeScript & modern technologies.',

    email: 'ps667570@gmail.com',
    phone: '+91 8860699758',
    location: 'Delhi India',

    resume: '#',
    github: '#',
    linkedin: '#',
  },

  navigation: [
    {
      label: 'Home',
      href: '#home',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Education',
      href: '#education',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ],
}

export const projects: Project[] = [
  /* =====================================================
     PROJECT 01
     MULTI-TENANT B2B PAYMENT SAAS
  ====================================================== */
  {
    number: '01',
    slug: 'saas-payment-platform',
    title: 'Multi-Tenant B2B Payment SaaS',

    description:
      'Production-deployed multi-tenant B2B payment management SaaS for companies to manage customers, payment requests, approvals, invoices, wallets, disputes, analytics, and multiple payment gateways through a secure role-based platform.',

    technologies: [
      'React',
      'Node.js',
            'Stripe',
                  'Razorpay',
                        'MySQL',
                              'MoMo',


      'Vite',
      'Tailwind CSS',
      'Express.js',
      'Sequelize',
      'MySQL',
      'JWT',
      'Pesapal',
    ],

    accent: 'cyan',

    github: '#',

    live:
      'https://saas-frontend-xi-five.vercel.app/',

    overview:
      'Multi-Tenant B2B Payment SaaS is a production-deployed payment management platform designed for multiple companies to manage their customers, payment requests, approvals, invoices, wallets, disputes, transactions, analytics, and payment processing from a centralized system. The application follows a multi-tenant architecture where company data is isolated while platform administrators can manage and monitor tenants across the system.',

    problem:
      'Businesses need a controlled payment workflow where payment creation, internal approval, gateway processing, customer access, disputes, and settlement are managed in one system. A key requirement was implementing a maker-checker approval process so that company-created payments cannot be processed directly without staff review. The platform also needed to support multiple companies while maintaining tenant-level data isolation and secure role-based access.',

    keyFeatures: [
      'Multi-tenant company architecture',
      'Tenant-level data isolation',
      'Role-based access control',
      'JWT authentication and secure sessions',
      'Customer management',
      'Payment creation and approval workflow',
      'Maker-checker payment approval',
      'Multiple payment gateway integration',
      'MoMo payment integration',
      'Stripe payment integration',
      'Razorpay payment integration',
      'Pesapal payment integration',
      'Public payment page using /pay/:id',
      'Payment links and QR-based payment access',
      'Customer payment portal',
      'Customer wallet information',
      'Wallet ledger and transaction history',
      'Invoice management',
      'Dispute management',
      'Dispute approval and settlement workflow',
      'Analytics and reporting',
      'Data exports',
      'Notifications',
      'API key management',
      'Audit and transaction records',
    ],

    roleAccess: [
      'Super Admin — Platform-level administrator with access across companies and tenant management capabilities',
      'Admin — Platform administration and cross-tenant operational access',
      'Company Admin — Tenant-level administrator managing company users, customers, payments, invoices, disputes, and operational workflows',
      'Staff — Reviews and approves or rejects company-created payments and disputes',
      'Viewer — Read-only access to permitted tenant information',
      'User — Access to permitted company-level application features',
      'Customer — Customer portal access for payments, wallet information, payment history, and disputes',
    ],

    workflow: [
      'Company Admin creates a payment for a specific customer.',
      'The payment enters the Staff review queue with a pending approval status.',
      'Staff reviews the payment details and either approves or rejects the request.',
      'Rejected payments cannot proceed to payment processing.',
      'Approved payments become available for payment processing.',
      'The Company Admin selects an available payment method.',
      'The backend communicates with the selected payment gateway.',
      'Gateway responses are validated and payment status is updated.',
      'Successful transactions update payment and wallet records.',
      'The customer can view received payments and transaction history from the customer portal.',
      'Customers can raise disputes against applicable transactions.',
      'Staff reviews disputes and approves or rejects them.',
      'Approved disputes can move into the settlement workflow.',
      'Settlement payments follow the same Staff approval process.',
      'Important payment, dispute, wallet, and audit activities are recorded.',
    ],

    contribution: [
      'Developed the React and TypeScript frontend using Vite and Tailwind CSS.',
      'Built backend REST APIs using Node.js, Express.js, TypeScript, and Sequelize.',
      'Designed and implemented multi-tenant application workflows.',
      'Implemented tenant-level data isolation and company-aware access control.',
      'Implemented JWT authentication and role-based authorization.',
      'Developed payment creation and maker-checker approval workflows.',
      'Built Staff review queues for payment approval and rejection.',
      'Integrated multiple payment gateways including MoMo, Stripe, Razorpay, and Pesapal.',
      'Implemented payment status tracking and gateway response handling.',
      'Developed public payment pages using /pay/:id.',
      'Implemented payment links and QR-based payment access.',
      'Developed customer portal functionality for payments, wallets, and transaction history.',
      'Implemented customer dispute creation and Staff dispute review workflows.',
      'Built settlement workflows that reuse the payment approval process.',
      'Implemented company wallet ledger and transaction records.',
      'Developed invoice, analytics, reports, notification, export, and API key modules.',
      'Implemented audit and transaction tracking for important business operations.',
      'Applied security middleware including Helmet, HPP, CORS, validation, bcrypt, and JWT authentication.',
      'Worked across frontend, backend, database, API integration, and production deployment.',
    ],

    architecture: [
      'React + TypeScript + Vite frontend',
      'Tailwind CSS UI layer',
      'Node.js + Express.js REST API backend',
      'TypeScript backend architecture',
      'Routes → Middleware → Controllers → Services → Sequelize Models',
      'Sequelize ORM for database operations',
      'MySQL relational database',
      'JWT authentication',
      'bcrypt password hashing',
      'Role-based access control',
      'Multi-tenant company isolation',
      'Payment gateway integration layer',
      'Wallet and transaction ledger',
      'Customer portal',
      'Public payment endpoint /pay/:id',
      'Dispute and settlement workflow',
      'Audit and transaction records',
      'Production frontend deployment on Vercel',
    ],
  },

  /* =====================================================
     PROJECT 02
     DMS & BOM MANAGEMENT SYSTEM
  ====================================================== */
  {
    number: '02',
    slug: 'dms-bom-management-system',
    title: 'DMS & BOM Management System',

    description:
      'Production-deployed enterprise DMS and BOM management platform for manufacturing plants, supporting engineering document control, ECR/ECN workflows, BOM creation and versioning, multi-level approvals, secure document distribution, AWS S3 storage, email notifications, and automated approval reminders.',

    technologies: [
      'React',
            'AWS S3',
                  'Node Cron',
                        'Node.js',
                              'MySQL',
                                    'Sequelize',





      'TypeScript',
      'Vite',
      'Material UI',
      'Tailwind CSS',
      'Express.js',
      'JWT',
      'Nodemailer',
      'EJS',
      'Google Drive API',
      'Puppeteer',
      'Swagger',
      'PM2',
      'Jest',
      'ESLint',
    ],

    accent: 'purple',

    github: '#',

    live:
      'https://dms.lumaxmail.com/',

    overview:
      'DMS & BOM Management System is a production-deployed enterprise workflow platform designed for manufacturing plants to manage engineering documents, ECR/ECN change control, Bills of Materials, approval hierarchies, document distribution, and audit workflows. The platform is organized into DMS, BOM, and Document operational phases with plant-level access control, document versioning, AWS S3 storage, automated notifications, PDF generation, and scheduled approval reminders.',

    problem:
      'Manufacturing teams often manage engineering documents, BOMs, approvals, revisions, and document sharing through spreadsheets, emails, and shared folders. This creates problems such as missing approval history, incorrect document versions, slow approval handoffs, and limited visibility into who approved or rejected a change. The platform centralizes these workflows into a single system with role-based access, configurable approval hierarchies, version control, audit history, notifications, secure storage, and automated reminders.',

    keyFeatures: [
      'Enterprise Document Management System',
      'Multi-plant workflow management',
      'Role-based access control',
      'JWT-based authentication',
      'ECR creation and approval workflow',
      'ECN creation after approved ECR',
      'Multi-level document approval',
      'Approve, Reject, and Send Back workflow',
      'Approval history and audit trail',
      'Document versioning',
      'Template-based approval hierarchy',
      'BOM creation and management',
      'Dynamic BOM form structure',
      'Plant-specific BOM hierarchy',
      'Multi-level BOM approval',
      'BOM versioning using parent BOM relationship',
      'BOM revision management',
      'BOM drawing and file uploads',
      'AWS S3 file storage',
      'BOM PDF generation',
      'BOM search by drawing number',
      'BOM activity tracking',
      'External document distribution',
      'Plant-wise external email list management',
      'Secure token-based document access',
      'AWS S3 presigned document URLs',
      'Email notifications using Nodemailer',
      'EJS email templates',
      'Daily approval reminder jobs',
      'Approval auto-escalation and auto-approval logic',
      'Google Drive integration',
      'Swagger API documentation',
      'PM2 production process management',
    ],

    roleAccess: [
      'SUPER_ADMIN — Global administrator with access to plants, users, templates, BOM hierarchy, and system configuration',
      'PLANT_ADMIN — Manages users and document-phase email recipients within the assigned plant',
      'PLANT_USER — Creates and processes business documents and BOMs according to assigned permissions',
      'PLANT_MODERATOR — Reviews and accesses permitted approved BOM and document information',
      'ENGINEER — Creates and processes engineering-related BOM and document workflows according to permissions',
      'Approvers — Review assigned documents and BOMs level-by-level according to the configured approval hierarchy',
    ],

    workflow: [
      'User logs into the platform using password or OTP-based authentication.',
      'JWT authentication establishes the user session and role-based access.',
      'User selects the required operational phase: DMS, BOM, or Document.',
      'Backend validates the JWT token and checks the user role and permissions.',
      'For DMS, the user creates an ECR using a configured document template.',
      'The template contains a multi-level approval hierarchy.',
      'The ECR is created in Pending status and approval records are generated.',
      'The first approver receives an email notification and reviews the document.',
      'Approvers can Approve, Reject, or Send Back the document.',
      'After complete ECR approval, the system allows creation of an ECN.',
      'The ECN increments the document version and reuses the approval hierarchy.',
      'For BOM, a user creates a BOM with plant-specific form data.',
      'Completed BOMs create approval records using the configured BOM hierarchy.',
      'BOM approvers process the BOM sequentially.',
      'After complete BOM approval, a new BOM version can be created using parentBomId.',
      'BOM revisions and versions remain traceable.',
      'BOM drawings and files are stored securely in AWS S3.',
      'Approved BOM information can be generated as a PDF.',
      'Plant Admin manages allowed external recipient email lists.',
      'External documents are distributed using secure token-based links.',
      'Recipients access documents through a public tokenized route.',
      'The backend validates the token and provides a secure S3 presigned URL.',
      'Scheduled cron jobs monitor pending approvals and send reminders or perform configured escalation actions.',
    ],

    contribution: [
      'Developed React and TypeScript frontend modules using Vite.',
      'Built responsive interfaces using Material UI and Tailwind CSS.',
      'Developed REST APIs using Node.js, Express.js, TypeScript, and Sequelize.',
      'Implemented JWT authentication and role-based authorization.',
      'Developed DMS document creation and multi-level approval workflows.',
      'Implemented ECR approval flow with Approve, Reject, and Send Back actions.',
      'Implemented ECN creation logic after successful ECR approval.',
      'Worked on document versioning and approval history tracking.',
      'Developed BOM creation, editing, review, approval, and versioning workflows.',
      'Implemented plant-specific BOM approval hierarchy.',
      'Worked with dynamic BOM form data and BOM line-item structures.',
      'Implemented BOM activity tracking and drawing-number search functionality.',
      'Integrated AWS S3 for secure document and BOM file storage.',
      'Worked with S3 presigned URLs for controlled document access.',
      'Implemented BOM PDF generation using Puppeteer.',
      'Developed email notifications using Nodemailer and EJS templates.',
      'Worked on approval reminder and auto-approval cron jobs using node-cron.',
      'Implemented external document sharing through secure token-based links.',
      'Worked with plant-wise external email recipient management.',
      'Integrated Google Drive functionality for document-related sheet generation.',
      'Worked with Sequelize models, relationships, migrations, and seeders.',
      'Implemented API validation and centralized error handling.',
      'Worked with Swagger for API documentation and testing.',
      'Worked across frontend, backend, database, cloud storage, notifications, and production deployment.',
    ],

    architecture: [
      'React + TypeScript + Vite frontend',
      'Material UI and Tailwind CSS UI layer',
      'Node.js + Express.js REST API backend',
      'TypeScript backend architecture',
      'Routes → Middleware → Controllers → Services → DAOs → Models',
      'Sequelize ORM',
      'MySQL relational database',
      'JWT authentication',
      'bcrypt password hashing',
      'Role-based authorization middleware',
      'DTO and request validation',
      'AWS S3 object storage',
      'S3 presigned URLs for secure file access',
      'Nodemailer email service',
      'EJS email templates',
      'Google Drive API integration',
      'Puppeteer PDF generation',
      'Node Cron scheduled approval jobs',
      'Swagger API documentation',
      'Jest testing setup',
      'PM2 production process management',
      'Production deployment with secure HTTPS access',
    ],
  },

  /* =====================================================
     PROJECT 03
     OGERA
  ====================================================== */
  {
    number: '03',
    slug: 'ogera',
    title: 'Ogera Sybellasystem',

    description:
      'Production-deployed full-stack job marketplace connecting verified students with employers in Rwanda/Africa, featuring academic verification, TrustScore, job applications, Kanban task management, MTN MoMo payments, Pesapal checkout, disputes, real-time messaging, notifications, and role-based administration.',

    technologies: [
      'React',
      'Redux Toolkit',
      'RTK Query',
      'Node.js',
            'Brevo',
                  'PostgreSQL',
                        'Vite',



      'Express.js',
      'Sequelize',
      'JWT',
            'TypeScript',

      'Socket.IO',
      'MTN MoMo',
      'Pesapal',
      'Twilio',
      'Nodemailer',
      'Swagger',
    ],

    accent: 'green',

    github: '#',

    live:
      'https://app.ogera.sybellasystems.co.rw/',

    overview:
      'Ogera is a production-deployed full-stack job marketplace platform designed to connect verified students with employers, primarily for freelance and part-time work in Rwanda/Africa. Students can verify academic credentials, build a TrustScore, apply for jobs, complete Kanban-based tasks, and receive payments. Employers can create and fund jobs, review applications, manage tasks, and approve student payouts. The platform also includes admin governance, role-based permissions, disputes, real-time communication, notifications, courses, analytics, and payment processing.',

    problem:
      'Employers need a reliable way to discover and trust student workers, while students need access to legitimate work opportunities and secure payment mechanisms. Traditional hiring workflows can make it difficult to verify academic credentials, evaluate student capability, track work progress, resolve disputes, and handle payments securely. Ogera addresses these problems by combining academic verification, TrustScore, structured job workflows, task management, payment escrow-style funding, disputes, and administrative controls in one platform.',

    keyFeatures: [
      'Student and employer job marketplace',
      'Academic document verification',
      'TrustScore system',
      'Cognitive assessments',
      'Problem-solving metrics',
      'Student profile management',
      'Skills and experience management',
      'Job creation and approval',
      'Job applications',
      'Resume upload and download',
      'Employer application management',
      'Kanban task management',
      'Task status tracking',
      'MTN MoMo Collection integration',
      'MTN MoMo Disbursement integration',
      'Pesapal online payment integration',
      'Employer job funding',
      'Student payout workflow',
      '90% student payout model',
      'Wallet and transaction records',
      'Currency conversion support',
      'Payment callbacks/webhooks',
      'Dispute management',
      'Dispute evidence uploads',
      'Dispute messaging',
      'Dispute timeline',
      'Real-time Socket.IO messaging',
      'Real-time dispute communication',
      'Notifications',
      'Email notifications',
      'SMS OTP',
      'Two-factor authentication',
      'Session management',
      'Role-based access control',
      'Dynamic permissions',
      'SuperAdmin and Admin management',
      'Courses and learning progress',
      'Student and employer dashboards',
      'Analytics and reporting',
      'AWS S3 secure file storage',
      'API documentation using Swagger',
    ],

    roleAccess: [
      'SuperAdmin — Full platform-level access including roles, permissions, administrators, users, payments, disputes, analytics, and system management',
      'Admin — Administrative access to assigned platform operations such as users, academic verification, jobs, payments, disputes, and analytics',
      'Employer — Creates jobs, manages applications, funds jobs, creates tasks, monitors work, and approves student payments',
      'Student — Builds profile, verifies academic credentials, takes assessments, applies for jobs, completes tasks, and receives payments',
      'Dynamic Sub-Admin Roles — Administrative roles can be configured with route-level permissions',
    ],

    workflow: [
      'Student registers on Ogera and completes account verification.',
      'The student verifies email and phone using verification workflows.',
      'Student uploads academic documents for verification.',
      'Admin reviews the academic verification request and approves or rejects it.',
      'Student builds a profile containing education, skills, employment, projects, and accomplishments.',
      'Student takes cognitive tests and problem-metric assessments.',
      'The platform calculates and stores the student TrustScore.',
      'Employer creates a job with required details and budget.',
      'The job can pass through administrative review before becoming available.',
      'Student browses available jobs using filtering and pagination.',
      'Student uploads a resume and submits a job application.',
      'Employer reviews applications and accepts a suitable student.',
      'Employer creates Kanban tasks for the accepted student.',
      'Student works through assigned tasks and updates task status.',
      'Employer funds the job through the MTN MoMo Request-to-Pay flow.',
      'The backend receives payment confirmation through the MoMo callback/webhook.',
      'The job funding status is updated and the transaction is recorded.',
      'After work completion, the employer approves the completed work.',
      'The backend calls MTN MoMo Disbursement to pay the student.',
      'Approximately 90% of the funded amount is transferred to the student.',
      'Payment and application records are updated as completed.',
      'Notifications and emails communicate important status changes.',
      'If a payment or work issue occurs, a user can create a dispute.',
      'Dispute evidence and messages are stored and handled through the dispute workflow.',
      'Admins review and resolve disputes.',
      'Socket.IO provides real-time updates for messaging and dispute communication.',
    ],

    contribution: [
      'Worked as a full-stack developer across frontend, backend, database, API integrations, and production deployment.',
      'Developed modular REST APIs using Node.js, Express.js, TypeScript, and Sequelize.',
      'Worked with PostgreSQL database design, Sequelize models, relationships, migrations, and transactions.',
      'Developed React 19 and TypeScript dashboard interfaces.',
      'Implemented Redux Toolkit and RTK Query for application state and API data management.',
      'Implemented protected routes and role-based frontend layouts.',
      'Worked on JWT authentication and automatic access-token refresh.',
      'Implemented authentication flows using access tokens and httpOnly refresh cookies.',
      'Implemented role-based authorization and dynamic route permissions.',
      'Worked on student and employer profile management.',
      'Developed job creation, listing, filtering, application, and employer management workflows.',
      'Worked on academic verification and document upload functionality.',
      'Implemented AWS S3 file storage and secure document access.',
      'Worked on cognitive test and problem-metric workflows.',
      'Implemented TrustScore calculation and score history functionality.',
      'Worked on Kanban task management for accepted job applications.',
      'Integrated MTN MoMo Collection APIs for employer job funding.',
      'Integrated MTN MoMo Disbursement APIs for student payouts.',
      'Worked with MoMo payment status tracking and callback/webhook handling.',
      'Worked with Pesapal payment integration for online checkout.',
      'Worked with currency conversion during payment processing.',
      'Implemented transaction and wallet-related records.',
      'Worked on dispute creation, evidence upload, messages, timeline, and resolution workflows.',
      'Worked with Socket.IO for real-time chat and dispute communication.',
      'Implemented notifications and email/SMS communication flows.',
      'Worked on session management, 2FA, OTP, password reset, and account verification.',
      'Worked with API validation, rate limiting, Helmet, CORS, bcrypt, and centralized error handling.',
      'Worked with Swagger API documentation and API testing.',
      'Worked across approximately 228 internal REST endpoints organized into feature modules.',
      'Worked with production deployment and live application troubleshooting.',
    ],

    architecture: [
      'React 19 + TypeScript frontend',
      'Vite frontend build system',
      'Redux Toolkit state management',
      'RTK Query API layer',
      'Role-based frontend layouts',
      'Protected route architecture',
      'Node.js + Express.js REST API backend',
      'TypeScript backend architecture',
      'Route → Middleware → Controller → Service → Repository → Sequelize',
      'PostgreSQL relational database',
      'Sequelize ORM',
      'Approximately 38 database tables',
      'JWT access-token authentication',
      'httpOnly refresh-token cookies',
      'bcrypt password hashing',
      'RBAC and permission middleware',
      'Joi request validation',
      'Helmet security middleware',
      'CORS whitelist',
      'Express rate limiting',
      'AWS S3 object storage',
      'Socket.IO real-time communication',
      'MTN MoMo Collection API',
      'MTN MoMo Disbursement API',
      'Pesapal payment integration',
      'Twilio SMS integration',
      'Brevo/Nodemailer email integration',
      'Currency conversion API integration',
      'Swagger API documentation',
      'Production frontend deployment',
      'Production backend deployment',
      'PostgreSQL cloud database',
    ],
  },

  /* =====================================================
     PROJECT 04
     KANBAN INVENTORY MANAGEMENT SYSTEM
  ====================================================== */
  {
    number: '04',
    slug: 'kanban-inventory-management-system',
    title: 'Kanban Inventory Management System',

    description:
      'Production-deployed manufacturing Kanban inventory management system that digitizes material dispatch through mobile scanning, automated part validation, duplicate scan detection, inventory tracking, transaction history, and an admin web dashboard.',

    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'Sequelize',
      'MySQL',
            'Node Cron',

            'TypeScript',

      'JWT',
      'Axios',
      'Material UI',
      'bcrypt',
      'AWS S3',
      'Swagger',
      'PM2',
    ],

    accent: 'green',

    github: '#',

    live:
      'https://kanban.lumaxmail.com/',

    overview:
      'Kanban Inventory Management System is a production-deployed manufacturing dispatch and inventory tracking platform designed to digitize the process of recording materials leaving a manufacturing plant. The system replaces manual material records with a mobile-based Kanban scanning workflow. Employees scan Kanban cards and associated parts, while backend APIs validate the scanned information, detect duplicate scans, track dispatch activity, and store transaction records. The web application provides administrators with tools to manage Kanban and part data, monitor sales-out history, and track inventory movement.',

    problem:
      'Manufacturing plants often rely on manual records to track materials leaving the facility. This can result in human errors, incorrect part numbers, missing records, duplicate scans, and difficulty tracking sales-out history. The Kanban system solves this problem by introducing a digital scanning workflow where Kanban cards and parts are validated automatically before a dispatch transaction is completed. This improves data accuracy, traceability, and visibility for administrators.',

    keyFeatures: [
      'Mobile-based Kanban scanning',
      'Manufacturing material dispatch tracking',
      'Kanban card management',
      'Part master management',
      'Part number validation',
      'Kanban-to-part mapping',
      'Multi-part scanning workflow',
      'Required quantity validation',
      'Duplicate scan detection',
      'Duplicate scan warning alerts',
      'Kanban dispatch transaction tracking',
      'Inventory movement history',
      'Sales-out history dashboard',
      'Date-filtered duplication history',
      'Pagination for history records',
      'Excel export for dispatch history',
      'Admin dashboard',
      'Employee scanning workflow',
      'JWT authentication',
      'Admin and employee role-based access',
      'Protected web application routes',
      'REST API architecture',
      'Centralized API error handling',
      'Request and error logging',
      'Swagger API documentation',
      'Automated log cleanup using cron jobs',
      'Production process management using PM2',
    ],

    roleAccess: [
      'Admin — Manages Kanban and part master data, monitors dispatch history, searches Kanban details, and views inventory activity through the web dashboard',
      'Employee — Uses the mobile scanning workflow, scans Kanban cards and parts, validates required parts, and records material dispatch transactions',
    ],

    workflow: [
      'Admin creates Kanban card details in the web application including part number and required quantity.',
      'Kanban card and associated part information are stored in the MySQL database.',
      'Employee opens the mobile application to begin the material scanning process.',
      'Employee scans the Kanban card QR code.',
      'The mobile application sends the scanned Kanban information to the backend API.',
      'The backend retrieves the corresponding Kanban and part details from the database.',
      'Employee scans each part associated with the Kanban card.',
      'The backend validates every scanned part number against the configured Kanban data.',
      'The system checks whether the scanned part has already been recorded for the current transaction.',
      'Duplicate scans are detected and the mobile application displays a warning.',
      'The system continues scanning until all required parts and quantities are successfully validated.',
      'Once the required parts are completed, the transaction is recorded in the database.',
      'The system records dispatch and duplication information for audit purposes.',
      'Inventory movement and sales-out history become available to administrators.',
      'Admin monitors dispatch activity through the web dashboard.',
      'Admins can search and filter historical Kanban transactions and export relevant data.',
      'Scheduled cron jobs clean up older application error logs.',
    ],

    contribution: [
      'Worked primarily on backend development and mobile interface implementation.',
      'Developed REST APIs for retrieving Kanban card and part information.',
      'Implemented backend logic for validating scanned part numbers against Kanban data.',
      'Developed the Kanban scanning workflow for manufacturing dispatch operations.',
      'Implemented duplicate scan detection and duplication tracking.',
      'Worked on validation of required parts and transaction quantities.',
      'Implemented database operations using Sequelize and MySQL.',
      'Worked with Kanban, part master, user, duplication history, and logging data models.',
      'Implemented JWT-based authentication for protected APIs.',
      'Worked with admin and employee role-based authorization.',
      'Contributed to the React Native mobile interface used for the scanning workflow.',
      'Worked on the React web application for administrative functionality.',
      'Implemented parts and Kanban data management functionality for administrators.',
      'Worked on sales-out and duplication history dashboards.',
      'Implemented pagination and date filtering for history records.',
      'Worked on Excel export functionality for dispatch history.',
      'Implemented request and error logging for important backend operations.',
      'Worked with centralized API response and error handling.',
      'Worked with Swagger for API documentation and testing.',
      'Worked with cron jobs for automated log cleanup and operational maintenance.',
      'Worked with security middleware including Helmet, CORS, HPP, bcrypt, and JWT.',
      'Worked with production deployment and application configuration.',
      'Currently developing the feature that allows administrators to create and manage Kanban card records directly from the web application, replacing the earlier manual database insertion process.',
    ],

    architecture: [
      'React + Vite admin web application',
      'React Native mobile scanning application',
      'Axios API integration',
      'Node.js + Express.js REST API backend',
      'TypeScript backend architecture',
      'API routes under /api/v1',
      'Routes → Middleware → Controllers → Services → Sequelize Models',
      'Sequelize ORM',
      'MySQL relational database',
      'JWT authentication',
      'bcrypt password hashing',
      'Admin and employee role-based authorization',
      'Kanban scanning business logic',
      'Part validation layer',
      'Duplicate scan detection',
      'Duplication history tracking',
      'JSON-based serial number tracking',
      'Request and error logging',
      'Centralized error handling',
      'Helmet security middleware',
      'CORS configuration',
      'HPP protection',
      'Compression middleware',
      'Node Cron scheduled jobs',
      'Swagger API documentation',
      'PM2 production process management',
      'Production deployment with HTTPS',
    ],
  },

  /* =====================================================
   PROJECT 05
   FIX & FURNISH SERVICE PLATFORM
====================================================== */
{
  number: '05',
  slug: 'fix-and-furnish',
  title: 'Fix & Furnish Service Platform',

  description:
    'Production service management platform connecting customers, sellers, admins, and technicians for appliance installation and repair services, with automated lead generation, technician assignment, OTP-based completion verification, and WhatsApp notifications.',

  technologies: [
    'Next.js',
    'Node.js',
    'Express.js',
    'Redux Toolkit',
    'MUI',
    'MySQL',
    'Sequelize',
    'JWT',
    'AWS S3',
    'WhatsApp Cloud API',
    'Nodemailer',
    'Mailjet',
    'Joi',
  ],

  accent: 'cyan',

  github: '#',

  live:
    'https://www.fixandfurnish.in/',

  overview:
    'Fix & Furnish is a service management platform designed to connect customers with technicians for installation and repair services such as air conditioners, water purifiers, and other appliances. Customers can submit service requests through the web application, while sellers can generate installation leads when customers purchase appliances. Administrators manage incoming leads, assign technicians based on the customer service area, and monitor the complete service lifecycle. Technicians use the mobile application to view assigned jobs, complete service tasks, and confirm completion through OTP verification.',

  problem:
    'Service businesses often manage customer service requests, installation leads, technician assignments, and job completion through phone calls, manual records, or emails. These processes can cause delays, lost requests, inefficient technician allocation, and limited visibility into service status. Fix & Furnish digitizes the complete workflow by centralizing service requests and leads, providing admin-controlled technician assignment, supporting automated lead generation from an external e-commerce platform, and using OTP verification to confirm successful service completion.',

  keyFeatures: [
    'Customer service request submission',
    'Seller lead generation system',
    'Admin dashboard for lead management',
    'Technician assignment workflow',
    'Area-based technician assignment',
    'Installation service management',
    'Repair service management',
    'Automated lead generation from Super Ergo',
    'External e-commerce integration',
    'Service lead lifecycle tracking',
    'Technician mobile application',
    'Assigned lead management',
    'OTP-based service completion verification',
    'Customer service confirmation',
    'WhatsApp notification system',
    'WhatsApp Cloud API integration',
    'Service status tracking',
    'Role-based access control',
    'JWT authentication',
    'Lead and customer information management',
    'Centralized service workflow',
  ],

  roleAccess: [
    'Admin — Manages incoming service leads, reviews requests, assigns technicians, monitors service progress, and manages the overall service workflow through the web application',
    'Customer — Creates installation or repair service requests through the web platform and receives service completion verification through OTP',
    'Seller — Generates service leads for customers who purchase appliances requiring installation and tracks submitted service requests',
    'Technician — Uses the mobile application to view assigned service leads, perform installation or repair work, and complete jobs using customer OTP verification',
  ],

  workflow: [
    'Customer visits the Fix & Furnish web platform and submits a service request for installation or repair.',
    'Seller can generate a service lead when a customer purchases an appliance requiring installation.',
    'Super Ergo e-commerce purchases can automatically generate service leads through backend integration.',
    'The backend receives the request and creates a service Lead record.',
    'The lead is made available to the Admin through the admin dashboard.',
    'Admin reviews the service request and customer information.',
    'Admin identifies and assigns an available technician based on the customer service area.',
    'The assigned technician receives the service lead in the mobile application.',
    'Technician visits the customer location and performs the required installation or repair work.',
    'After completing the service, the system initiates customer OTP verification.',
    'An OTP is sent to the customer for service completion confirmation.',
    'Technician enters the OTP into the mobile application.',
    'The backend validates the OTP.',
    'After successful verification, the lead is marked as completed.',
    'The completed service is recorded for future tracking and operational management.',
    'WhatsApp notifications can be sent through the WhatsApp Cloud API for important service communication.',
  ],

  contribution: [
    'Worked primarily on backend feature development and system integrations.',
    'Developed REST APIs using Node.js and Express.js.',
    'Worked with Sequelize ORM and MySQL database operations.',
    'Implemented backend service lead management functionality.',
    'Developed APIs for automated service lead generation from the Super Ergo e-commerce platform.',
    'Integrated the Super Ergo purchase workflow so installation-required products can automatically create service leads.',
    'Implemented backend logic for processing externally generated service requests.',
    'Integrated WhatsApp Cloud API from Meta for service-related OTP and notification communication.',
    'Developed WhatsApp-based OTP delivery functionality for service verification.',
    'Worked on service completion verification workflow using customer OTP.',
    'Implemented and maintained APIs supporting Admin, Seller, Customer, and Technician workflows.',
    'Worked on authentication and role-based access control using JWT.',
    'Worked with MySQL database models and relationships.',
    'Implemented request validation and backend error handling.',
    'Worked on API integration between external e-commerce services and Fix & Furnish.',
    'Worked across backend APIs, database logic, third-party integrations, and production functionality.',
  ],

  architecture: [
    'Next.js 14 web application',
    'React frontend architecture',
    'React Native technician mobile application',
    'Redux Toolkit state management',
    'Material UI component layer',
    'Node.js + Express.js REST API backend',
    'REST APIs under /api/v1',
    'Route → Validation → Middleware → Controller → Service → Repository → Sequelize Model',
    'Joi request validation',
    'JWT authentication',
    'Role-based authorization',
    'MySQL relational database',
    'Sequelize ORM',
    'Customer service request module',
    'Seller lead generation module',
    'Admin lead management module',
    'Technician assignment module',
    'Service completion OTP workflow',
    'AWS S3 file storage',
    'WhatsApp Cloud API integration',
    'Nodemailer / Mailjet email services',
    'External Super Ergo e-commerce integration',
    'Production web application deployment',
  ],
},

  {
  number: '06',
  slug: 'employee-management-system',
  title: 'Employee Management System',

  description:
    'An enterprise HRMS for Sourcery IT with GPS-based attendance, leave & WFH management, payroll automation, and secure employee document management.',

  technologies: [
    'React.js',
    'React Native',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'AWS S3',
    'JWT',
    'Cron Jobs',
    'Google Maps API',
    'Vercel',
    'Render',
  ],

  accent: 'green',

  github: '#',
live: 'https://sourceryit.vercel.app/',

  overview:
    'This Employee Management System is an enterprise HR platform developed for Sourcery IT to automate attendance, employee records, leave management, payroll, and document management. The solution consists of a React.js web application for administrators and a React Native mobile application for employees. Employees can mark attendance only when they are within a 100-meter radius of the office using GPS-based geofencing. Employees working remotely must first submit a Work From Home request, which requires administrator approval before attendance can be marked from home. The platform also provides secure employee document management using AWS S3 and automated HR operations through scheduled Cron Jobs.',

  problem:
    'The company previously managed attendance, employee documents, leave requests, payroll, and approvals manually, making HR operations time-consuming and error-prone. This system digitized the complete HR workflow by introducing GPS-based attendance, secure document storage, approval workflows, live attendance monitoring, and automated payroll and leave processes.',

  keyFeatures: [
    'GPS-based Attendance System',
    'Employee Punch In / Punch Out',
    '100-Meter GPS Geofencing',
    'Monthly Attendance Reports',
    'Work From Home Request Management',
    'Leave Management System',
    'Admin Approval Workflow',
    'Secure Document Upload',
    'AWS S3 Integration',
    'Employee Profile Management',
    'Live Attendance Dashboard',
    'Attendance Editing',
    'Manual Attendance Entry',
    'Payroll Automation',
    'Automatic Leave Allocation',
    '240 Relaxation Hours Automation',
    'Birthday Leave Policy',
    'JWT Authentication',
    'Role-Based Access Control',
  ],

  roleAccess: [
    'Employee — React Native mobile application',
    'Mark attendance using GPS location',
    'Apply Leave and Work From Home requests',
    'Upload and manage company documents',
    'Manage employee profile',
    'View attendance history',
    'Administrator — React.js web dashboard',
    'Monitor live employee attendance',
    'Manage employee records',
    'Approve or reject Leave and WFH requests',
    'Edit attendance records',
    'Verify employee documents',
    'Manage payroll operations',
  ],

  workflow: [
    'Employee logs into the React Native mobile application.',
    'GPS verifies whether the employee is within the 100-meter office radius.',
    'If the employee is inside the office boundary, attendance is marked successfully.',
    'If working remotely, the employee submits a Work From Home request.',
    'Administrator reviews and approves or rejects the WFH request.',
    'Approved employees can mark attendance from their remote location.',
    'Employees upload personal and company documents securely to AWS S3.',
    'Administrators monitor live attendance and manage employee records.',
    'Cron Jobs automatically generate salaries at month-end.',
    'Monthly Sick Leave and Casual Leave are automatically credited.',
    '240 Relaxation Hours are automatically allocated according to company policy.',
    'The first Work From Home request every month is automatically approved.',
    'Additional WFH requests require administrator approval.',
    'Birthday leave is automatically approved according to company policy without salary deduction.',
  ],

  contribution: [
    'Developed REST APIs using Node.js and Express.js.',
    'Implemented JWT authentication and role-based access control.',
    'Implemented GPS-based attendance validation and geofencing logic.',
    'Developed Leave and Work From Home approval workflows.',
    'Integrated AWS S3 for secure employee document storage.',
    'Implemented Cron Jobs for payroll and HR automation.',
    'Automated monthly leave allocation and relaxation hour resets.',
    'Implemented company-specific HR policies such as WFH and birthday leave.',
    'Developed responsive administrator interfaces using React.js.',
    'Developed employee-facing features using React Native.',
    'Optimized PostgreSQL queries for attendance and employee operations.',
    'Collaborated with the team on production deployment.',
    'Implemented business logic for attendance, payroll, leave, and employee management.',
  ],

  architecture: [
    'React.js Admin Dashboard',
    'React Native Employee Mobile App',
    'Node.js + Express.js REST API',
    'PostgreSQL Database',
    'AWS S3 Document Storage',
    'JWT Authentication',
    'Cron Jobs for HR Automation',
    'Google Maps API for Location Services',
  ],
},
]