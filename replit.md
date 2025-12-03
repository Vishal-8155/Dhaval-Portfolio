# Ayush Rai - Portfolio Website

## Overview

This is a personal portfolio website for Ayush Rai, a Senior Blockchain Developer specializing in Solidity, Web3, and DeFi solutions. The application showcases professional experience, technical skills, projects, and provides a contact interface. Built as a modern single-page application with a clean, minimalist design inspired by Linear and Stripe, featuring blockchain-themed aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (vs React Router for minimal bundle size)
- **TanStack Query** (React Query) for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Custom theme system supporting light/dark modes with CSS variables
- Typography: Inter (primary), JetBrains Mono (code/technical content)

**Design System**
- Follows design guidelines in `design_guidelines.md` with Linear/Stripe-inspired minimalism
- Custom spacing primitives using Tailwind's 4-based scale
- Responsive grid layouts with mobile-first approach
- Section-based layout: Hero, About, Skills, Experience, Projects, Contact, Footer
- Smooth scroll navigation with active section highlighting

**State Management Approach**
- Local component state with React hooks (useState, useEffect)
- No global state management library (Redux/Zustand) - keeps it simple
- Form state managed by React Hook Form with Zod validation
- Toast notifications via custom hook pattern

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ES modules
- Custom request logging middleware tracking API response times
- Raw body capture for potential webhook integrations

**Development vs Production**
- Development: Vite middleware integration for HMR and dev tooling
- Production: Static file serving from built assets
- Replit-specific plugins for development experience (cartographer, dev banner)

**API Design**
- RESTful API structure (routes prefixed with `/api`)
- Modular route registration pattern in `server/routes.ts`
- Storage abstraction layer for data operations

### Data Storage Solutions

**Database Setup**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema-first approach with TypeScript types generated from Drizzle schemas
- Migration management via Drizzle Kit

**Storage Architecture**
- Abstraction layer (`IStorage` interface) allowing multiple implementations
- In-memory storage (`MemStorage`) for development/testing
- Designed to swap in PostgreSQL storage implementation
- Example user schema with UUID primary keys

**Data Models**
- Users table with username/password fields (authentication foundation)
- Zod schemas for runtime validation via `drizzle-zod`
- Type safety across client/server with shared schema definitions

### Authentication & Authorization

**Current State**
- Basic user model exists in schema (username, password fields)
- No active authentication implementation yet
- Session management dependencies present (`connect-pg-simple`)
- Cookie-based session infrastructure ready

**Planned Approach**
- Session-based authentication (vs JWT) for simplicity
- PostgreSQL session store via `connect-pg-simple`
- Password hashing should use bcrypt or similar
- Protected API routes would use middleware pattern

### External Dependencies

**Third-Party Services**
- **Neon Database** - Serverless PostgreSQL hosting (via `@neondatabase/serverless`)
- **Google Fonts** - Inter and JetBrains Mono font families

**Development Tools**
- **Replit Integration** - Development environment specific tooling
  - Runtime error overlay
  - Cartographer for code navigation
  - Dev banner for environment awareness

**UI Component Libraries**
- **Radix UI** - Comprehensive unstyled component primitives (20+ components)
  - Accordion, Dialog, Dropdown, Popover, Toast, etc.
  - Accessibility-first with ARIA compliance
- **Lucide React** - Icon library for consistent iconography
- **Embla Carousel** - Touch-enabled carousel component
- **CMDK** - Command menu interface component

**Utility Libraries**
- **date-fns** - Date manipulation and formatting
- **clsx** + **tailwind-merge** - Conditional className composition
- **nanoid** - Unique ID generation

**Build & Development**
- **TypeScript** - Type checking without emit (build handled by Vite/esbuild)
- **esbuild** - Fast bundling for server code in production
- **PostCSS** with Autoprefixer - CSS processing pipeline

**Asset Management**
- Static assets stored in `attached_assets/generated_images/`
- Company logos, hero backgrounds, profile images
- Alias configured as `@assets` for clean imports