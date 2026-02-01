# Key Production 🎬

<div align="center">

![Key Production Banner](https://img.shields.io/badge/Key_Production-Event_&_Commercial_Production-5CB027?style=for-the-badge&logo=video&logoColor=white)

A professional, modern website for **Key Production** - a premier event and commercial production company based in Sri Lanka.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0050?logo=framer)](https://www.framer.com/motion/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

[Live Demo](https://keyproduction.lk) · [Report Bug](https://github.com/Kavi9928/Event-Key-Production/issues) · [Request Feature](https://github.com/Kavi9928/Event-Key-Production/issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Theme & Styling](#-theme--styling)
- [Components](#-components)
- [API Routes](#-api-routes)
- [Environment Variables](#-environment-variables)
- [SEO](#-seo)
- [Deployment](#-deployment)
- [Contact](#-contact-information)

---

## ✨ Features

### Core Features
- 🎨 **Modern Design** - Sleek dark/light theme with brand green accents (#5CB027)
- 🌓 **Dark/Light Mode** - Full theme switching with localStorage persistence
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 16 App Router & Turbopack
- 🎭 **Smooth Animations** - Scroll, hover & page transitions powered by Framer Motion

### SEO & Marketing
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 📊 **Google Analytics** - GA4 integration ready
- 🗺️ **Sitemap & Robots** - Auto-generated for search engines
- 📝 **JSON-LD** - Structured data for rich snippets

### Integrations
- 💬 **WhatsApp Chat** - Floating button for instant customer inquiries
- 📍 **Google Maps** - Interactive location embed
- 📧 **Email Integration** - Nodemailer with auto-reply functionality
- 🔔 **Newsletter** - Email subscription form in footer

### User Experience
- 🖼️ **Gallery Lightbox** - Full-screen image viewing with navigation
- 🎥 **Video Showreel** - Embedded video player section
- ❓ **FAQ Accordion** - Animated expandable questions
- ⭐ **Testimonials** - Client reviews with 5-star ratings
- 🏢 **Client Logos** - Infinite scrolling brand showcase

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Cinematic hero, services, projects, video showreel, testimonials, FAQ, CTA |
| **Events** | `/events` | Event portfolio with category filters and modal popups |
| **Commercial** | `/commercial` | Video gallery with filtering and video player modal |
| **Gallery** | `/gallery` | Full portfolio with lightbox, categories, and navigation |
| **About** | `/about` | Company story, team members, core values, timeline |
| **Contact** | `/contact` | Contact form, office info, WhatsApp, Google Maps |

---

## 🛠️ Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router |
| **React** | 19.2.3 | UI library |
| **TypeScript** | 5.x | Type-safe JavaScript |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **CSS Variables** | - | Custom theming (dark/light mode) |
| **Framer Motion** | 12.x | Animation library |
| **Lucide React** | 0.563.0 | Icon library |

### Backend & APIs
| Technology | Purpose |
|------------|---------|
| **Next.js API Routes** | Contact form handling |
| **Nodemailer** | Email sending with templates |

### Fonts
| Font | Usage |
|------|-------|
| **Geist Sans** | Primary text |
| **Geist Mono** | Code/technical text |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Kavi9928/Event-Key-Production.git

# Navigate to project directory
cd Event-Key-Production

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
key-production/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles & CSS variables
│   │   ├── events/
│   │   │   └── page.tsx          # Events page
│   │   ├── commercial/
│   │   │   └── page.tsx          # Commercial page
│   │   ├── gallery/
│   │   │   ├── page.tsx          # Gallery page
│   │   │   └── layout.tsx        # Gallery metadata
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts      # Contact form API
│   │   ├── sitemap.ts            # Dynamic sitemap
│   │   └── robots.ts             # Robots.txt
│   │
│   ├── components/               # React Components
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── AnimatedFooter.tsx    # Animated footer
│   │   ├── Footer.tsx            # Standard footer
│   │   ├── Hero.tsx              # Hero section
│   │   ├── FeaturedProjects.tsx  # Projects grid
│   │   ├── Services.tsx          # Services section
│   │   ├── Testimonials.tsx      # Testimonials with ratings
│   │   ├── CTA.tsx               # Call-to-action
│   │   ├── FAQ.tsx               # FAQ accordion
│   │   ├── VideoShowreel.tsx     # Video showreel section
│   │   ├── ClientLogos.tsx       # Scrolling client logos
│   │   ├── WhatsAppButton.tsx    # Floating WhatsApp
│   │   ├── ThemeLogo.tsx         # Theme-aware logo
│   │   ├── ThemeToggle.tsx       # Dark/light toggle
│   │   ├── PageHeader.tsx        # Page headers
│   │   ├── Modal.tsx             # Modal component
│   │   ├── VideoPlayer.tsx       # Video player
│   │   ├── PageLoader.tsx        # Loading animations
│   │   ├── GoogleAnalytics.tsx   # GA4 tracking
│   │   └── JsonLd.tsx            # SEO structured data
│   │
│   └── context/
│       └── ThemeContext.tsx      # Theme state management
│
├── public/                       # Static assets
│   ├── logo.png                  # Default logo
│   ├── logo-dark.png             # Logo for light mode
│   ├── logo-light.png            # Logo for dark mode
│   └── manifest.json             # PWA manifest
│
├── .env.example                  # Environment variables template
├── package.json                  # Dependencies & scripts
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── next.config.ts                # Next.js configuration
```

---

## 🎨 Theme & Styling

### Theme Colors

| Color | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| **Accent** | `#5CB027` | `#5CB027` | Primary brand color (green) |
| **Accent Light** | `#7ED348` | `#7ED348` | Hover states |
| **Background** | `#0a0a0a` | `#f8f9fa` | Page background |
| **Card** | `#141414` | `#ffffff` | Card backgrounds |
| **Border** | `#262626` | `#e0e0e0` | Borders |
| **Foreground** | `#ededed` | `#1a1a1a` | Primary text |
| **Muted** | `#888888` | `#666666` | Secondary text |

### CSS Variables

Theme colors are defined in `globals.css`:

```css
:root, [data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #5CB027;
  /* ... */
}

[data-theme="light"] {
  --background: #f8f9fa;
  --foreground: #1a1a1a;
  /* ... */
}
```

---

## 🧩 Components

### Key Components

| Component | Description |
|-----------|-------------|
| `ThemeLogo` | Automatically switches between dark/light logo |
| `ThemeToggle` | Moon/sun button for theme switching |
| `WhatsAppButton` | Floating button with phone number |
| `FAQ` | Animated accordion with expand/collapse |
| `VideoShowreel` | Play button overlay with video modal |
| `ClientLogos` | Infinite horizontal scroll animation |
| `PageLoader` | Loading skeleton with logo animation |

---

## 🔌 API Routes

### POST `/api/contact`

Handles contact form submissions with email notifications.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+94 76 123 4567",
  "company": "ABC Corp",
  "projectType": "Event Coverage",
  "budget": "$500 - $1,000",
  "message": "I need..."
}
```

**Features:**
- Validates required fields
- Sends email to business owner
- Sends auto-reply to customer
- Beautiful HTML email templates

---

## 🔐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Email Configuration (for contact form)
EMAIL_USER=slkeyproduction@gmail.com
EMAIL_PASS=your_app_password_here

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Setting up Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate a new app password for "Mail"
5. Use this password in `EMAIL_PASS`

---

## 🔍 SEO

### Implemented SEO Features

- ✅ **Meta Tags** - Title, description, keywords
- ✅ **Open Graph** - Facebook/LinkedIn sharing
- ✅ **Twitter Cards** - Twitter sharing
- ✅ **JSON-LD** - Structured data for rich snippets
- ✅ **Sitemap** - Auto-generated at `/sitemap.xml`
- ✅ **Robots.txt** - Search engine directives
- ✅ **Canonical URLs** - Prevent duplicate content
- ✅ **Favicon** - Custom logo as favicon

### Structured Data Types

- Organization
- LocalBusiness
- WebSite
- BreadcrumbList

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kavi9928/Event-Key-Production)

1. Click the button above
2. Connect your GitHub account
3. Add environment variables
4. Deploy!

### Other Platforms

| Platform | Guide |
|----------|-------|
| **Netlify** | [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/) |
| **AWS Amplify** | [Deploy Next.js](https://docs.amplify.aws/guides/hosting/nextjs/) |
| **Railway** | [Railway Next.js](https://railway.app/template/nextjs) |
| **DigitalOcean** | [App Platform](https://www.digitalocean.com/products/app-platform) |

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📞 Contact Information

| Contact | Details |
|---------|---------|
| **Phone** | +94 76 923 8423 |
| **Email** | slkeyproduction@gmail.com |
| **Address** | 70A, Yahampath Mawatha, Maharagama, Sri Lanka |
| **Facebook** | [Key Production](https://www.facebook.com/share/1DYLA5Grao/) |
| **WhatsApp** | [Chat Now](https://wa.me/94769238423) |

---

## 📊 Performance

| Metric | Score |
|--------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

*Lighthouse scores may vary based on network conditions*

---

## 🤝 Contributing

This is a proprietary project. For business inquiries, please contact us.

---

## 📜 License

This project is proprietary software owned by **Key Production**. All rights reserved.

---

<div align="center">

Made with ❤️ by **Key Production** | Sri Lanka

**Capturing Moments, Creating Memories**

[🌐 Website](https://keyproduction.lk) · [📘 Facebook](https://www.facebook.com/share/1DYLA5Grao/) · [📧 Email](mailto:slkeyproduction@gmail.com)

</div>
