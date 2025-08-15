# Overview

Ikonnect Service is a modern, professional digital services agency website built with a React + Express.js full-stack architecture. The application serves as a multi-page marketing website showcasing the agency's services including AI web development, data automation, digital marketing, social media management, AI integration, chatbot development, and web scraping. The site features a sleek, futuristic design with cutting-edge UI components and animations, built to attract potential clients and demonstrate the agency's technical capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing across multiple pages (Home, About, Services, Portfolio, Process, Blog, Contact)
- **Styling**: TailwindCSS with custom CSS variables for a dark, tech-inspired theme with gradient effects
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistent design
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses
- **Development**: Hot reload with Vite integration for seamless full-stack development
- **Error Handling**: Centralized error handling middleware with proper status codes

## Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database provider
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **In-Memory Fallback**: MemStorage class for development and testing without database dependency

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL storage
- **Development Mode**: In-memory storage for simplified development workflow
- **Future-Ready**: Architecture supports easy integration of authentication providers

## External Dependencies
- **Database**: Neon PostgreSQL serverless database (@neondatabase/serverless)
- **UI Framework**: Radix UI components for accessible, unstyled primitives
- **Animation**: Embla Carousel for interactive carousels
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit integration for development environment support
- **Validation**: Zod for runtime type validation and schema definition
- **Date Handling**: date-fns for date manipulation and formatting