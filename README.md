# Frontend Showcase

A modern, interactive single-page website built with Next.js to showcase frontend development capabilities.

## Overview

This project is a sleek, responsive single-page website designed to demonstrate modern frontend development techniques and technologies. It leverages the power of Next.js for performance optimization, Lucide React for beautiful icons, and Framer Motion for smooth animations, creating an engaging user experience.

The site features various sections including a hero area, services showcase, team profiles, testimonials, and contact information, all seamlessly integrated into a single scrollable page with smooth transitions between sections.

## Tech Stack

- **[Next.js](https://nextjs.org/)** - React framework for production-grade applications
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React

## Features

- Single-page design with smooth scrolling between sections
- Dynamic hero section with eye-catching animations
- Services showcase with interactive cards
- Team member profiles with hover effects
- Testimonial carousel with client feedback
- Contact form with validation
- Responsive navigation with mobile menu
- Smooth reveal animations powered by Framer Motion
- Clean, modern UI with Lucide React icons
- Optimized performance with Next.js
- Component-based architecture for maintainability

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frontend-showcase/
├── .next/             # Next.js build output
├── app/               # App router structure
│   ├── components/    # Reusable UI components
│   │   └── ui/        # UI component library
│   │       ├── Button.js
│   │       ├── Approach.js
│   │       ├── Contact.js
│   │       ├── Footer.js
│   │       ├── Hero.js
│   │       ├── Navigation.js
│   │       ├── Services.js
│   │       ├── Team.js
│   │       └── Testimonials.js
│   ├── globals.css    # Global styles
│   ├── layout.js      # Root layout component
│   └── page.js        # Main page component
├── node_modules/      # Dependencies
├── public/            # Static assets
├── .gitignore         # Git ignore file
├── jsconfig.json      # JavaScript configuration
├── next.config.mjs    # Next.js configuration
├── package-lock.json  # Package lock file
├── package.json       # Package information
├── postcss.config.mjs # PostCSS configuration
└── README.md          # Project documentation
```

## Customization

You can start editing the site by modifying the components in the project:

- `app/page.js` - Main page that imports and arranges all section components
- `app/components/ui/Hero.js` - Hero section with main headline and call-to-action
- `app/components/ui/Services.js` - Services/features showcase
- `app/components/ui/Approach.js` - Approach/methodology section
- `app/components/ui/Team.js` - Team members display
- `app/components/ui/Testimonials.js` - Client testimonials
- `app/components/ui/Contact.js` - Contact form and information
- `app/components/ui/Footer.js` - Site footer with links and copyright
- `app/components/ui/Navigation.js` - Site navigation/header

The page auto-updates as you edit files, allowing for rapid development and iteration.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Lucide React Documentation](https://lucide.dev/docs/lucide-react)
- [Framer Motion Documentation](https://www.framer.com/motion/introduction/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
