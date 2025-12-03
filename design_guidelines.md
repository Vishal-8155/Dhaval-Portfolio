# Design Guidelines: Ayush Rai Portfolio Redesign

## Design Approach

**Reference-Based Approach**: Inspired by Linear's clean minimalism + Stripe's professional restraint + modern developer portfolios (Awwwards-winning sites). Creating a tech-forward, blockchain-themed portfolio that balances professionalism with visual impact.

**Core Principle**: Sophisticated simplicity - let projects and expertise shine through clean, modern design with purposeful interactions.

---

## Typography

**Font Families** (Google Fonts):
- Primary: Inter (headings, UI elements) - weights 400, 500, 600, 700
- Secondary: JetBrains Mono (code snippets, technical details) - weight 400
- Body: Inter (paragraphs, descriptions) - weights 400, 500

**Hierarchy**:
- Hero Title: text-5xl md:text-7xl, font-bold, tracking-tight
- Section Headings: text-3xl md:text-4xl, font-semibold
- Subsection Headings: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, leading-relaxed
- Captions/Labels: text-sm, font-medium, uppercase, tracking-wide

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm.
- Section padding: py-20 md:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-7xl mx-auto px-6 md:px-8

**Grid System**: 
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Contact: 2-column split (form + info) on desktop, stacked mobile

---

## Component Library

### Navigation
Fixed header with blur backdrop, logo left, nav links center, CTA button right. Mobile: hamburger menu with slide-out panel. Include smooth scroll-to-section and active section highlighting.

### Hero Section
Full-viewport hero with large professional headshot (circular, subtle glow effect), dynamic typing animation for role titles ("Blockchain Developer | Solidity Expert | Web3 Innovator"), prominent dual CTAs ("View Projects" + "Contact Me"), subtle gradient background with animated blockchain network visualization (connecting dots/nodes).

**Hero Image**: Professional headshot with modern treatment - circular mask, subtle border, soft shadow/glow effect positioned prominently in hero.

### About Section
Two-column layout: left side with professional summary, right side with 2x2 grid of expertise cards (each with icon, title, brief description). Cards have subtle hover lift effect and border treatment.

### Skills Grid
Categorized skill cards (Solidity, Blockchain, Web3, etc.) with technology tag pills, expertise level indicators (visual bars or percentages), hover effects revealing additional details. Use icon library (Heroicons) for technology representations.

### Work Experience Timeline
Vertical timeline with alternating card layout, company logos, expandable detail sections, date badges, achievement bullet points. Timeline connector line with gradient effect.

### Projects Showcase
Filterable grid with category tabs (DeFi, NFT, Infrastructure, etc.), project cards with thumbnail images, hover zoom effect, technology tag pills, dual CTAs ("View Live" + "Details"). Click opens modal with full project details, larger screenshots, and complete tech stack.

### Contact Section
Split layout: left side with floating-label form inputs (name, email, phone, message), right side with contact info cards (email, phone, location) and social media icon links. Form includes validation states and success animation.

### Footer
Three-column layout: brand/tagline, quick links, social media. Simple, clean, professional.

---

## Interaction Design

**Animations** (minimal, purposeful):
- Scroll-triggered fade-in/slide-up for sections (stagger children)
- Smooth page scroll behavior
- Hover lift on cards (transform: translateY(-4px), subtle shadow increase)
- Button hover: slight scale, brightness increase
- Hero typing effect for role titles
- Timeline items reveal on scroll

**Critical**: Blur backdrop for buttons placed on hero image (backdrop-blur-md).

---

## Images Strategy

**Hero Section**: Large professional headshot - primary focal point, circular treatment
**Project Cards**: Thumbnails/screenshots of each project (use actual project previews)
**Company Logos**: Small logos in work experience timeline
**Background Elements**: Subtle gradient meshes, blockchain network visualizations (SVG patterns)

All images should be optimized, use lazy loading for project thumbnails.

---

## Responsive Behavior

**Breakpoints**: Mobile-first approach
- Base: Single column, stacked sections
- md (768px): Two-column grids, horizontal navigation
- lg (1024px): Three-column grids, full desktop layout
- Collapsible navigation on mobile with smooth slide animation
- Touch-friendly tap targets (min 44px)

---

## Distinctive Elements

- Blockchain-themed gradient accents throughout (purple-blue spectrum)
- Code snippet styling in JetBrains Mono for technical sections
- Subtle animated blockchain network visualization in hero background
- Project category filtering with smooth transitions
- Professional headshot as hero focal point with modern treatment
- Timeline design for work experience creates visual journey
- Modal system for detailed project views with embedded previews

---

**Implementation Priority**: Hero → Navigation → Projects → Skills → Experience → Contact → Footer