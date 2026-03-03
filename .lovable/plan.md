

## Under25 MAIT — Dark & Futuristic College Club Website

### Design System
- Dark background with neon accent colors (cyan/purple glow effects)
- Glassmorphism cards with backdrop blur
- Custom CSS variables for neon glow colors

### Header
- "Under25 MAIT" logo on the left with a glowing text effect
- Centered navigation: Home, Team, Events, Gallery, About — with hover glow underline animations
- Sticky header with glass blur background
- Mobile hamburger menu

### Hero Section (Home Page)
- 3D animated background using React Three Fiber (floating geometric shapes — cubes, spheres, torus)
- Bold headline with glitch/typing animation: "Under25 MAIT"
- Tagline with fade-in effect
- Glowing CTA button with pulse animation

### Scroll Effects (applied across all sections)
- Elements fade-in and slide-up on scroll using Intersection Observer
- Parallax-style layered movement
- 3D tilt effect on cards when hovered (CSS perspective transforms)

### Page Sections (placeholder content)
- **Team** — Grid of member cards with 3D flip effect on hover
- **Events** — Timeline or card layout with staggered scroll animations
- **Gallery** — Image grid with 3D hover zoom and glow border
- **About** — Text section with animated stats counters

### Footer
- "© 2026 Under25 MAIT. All rights reserved." centered
- Subtle glow line separator above

### File Organization
- `src/components/Header.tsx` — navigation with glow effects
- `src/components/Footer.tsx` — copyright
- `src/components/Layout.tsx` — wrapper
- `src/components/HeroSection.tsx` — 3D hero with Three.js
- `src/components/ScrollReveal.tsx` — reusable scroll animation wrapper
- `src/components/TiltCard.tsx` — 3D tilt hover card
- Separate pages: Home, Team, Events, Gallery, About

