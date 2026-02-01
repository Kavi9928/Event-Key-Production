# Key Production 🎬

A professional, modern website for **Key Production** - a premier event and commercial production company based in Sri Lanka.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-FF0050?logo=framer)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)

## ✨ Features

- 🎨 **Modern Design** - Dark theme with stunning green accents (#5CB027)
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js App Router & Turbopack
- 🎭 **Smooth Animations** - Scroll & hover effects powered by Framer Motion
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt, JSON-LD structured data
- 💬 **WhatsApp Integration** - Floating chat button for instant customer inquiries
- 📍 **Google Maps** - Interactive location embed on contact page
- 📧 **Contact Form** - With API endpoint for form submissions
- ⭐ **Testimonials** - Client reviews with star ratings

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Cinematic hero with video background, services, featured projects, testimonials, CTA |
| **Events** | Event portfolio with category filters and modal popups for details |
| **Commercial** | Video gallery with filtering and video player modal |
| **About** | Company story, team members, core values, timeline history |
| **Contact** | Contact form, office info, WhatsApp, Google Maps embed |

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router |
| **React** | 19 | UI library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework |
| **Framer Motion** | Latest | Animation library |
| **Lucide React** | Latest | Icon library |

### Features & Integrations
| Feature | Technology |
|---------|------------|
| Fonts | Geist (Google Fonts) |
| SEO | Next.js Metadata API, JSON-LD |
| Maps | Google Maps Embed |
| Chat | WhatsApp Business API |
| Forms | Next.js API Routes |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Kavi9928/Event-Key-Production.git

# Navigate to project directory
cd Event-Key-Production

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
key-production/
├── src/
│   ├── app/                    # Pages (Next.js App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── events/             # Events page
│   │   ├── commercial/         # Commercial production page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── api/contact/        # Contact form API endpoint
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt configuration
│   │
│   └── components/             # Reusable React components
│       ├── Navbar.tsx          # Navigation with active page indicator
│       ├── AnimatedFooter.tsx  # Animated footer with newsletter
│       ├── Hero.tsx            # Cinematic hero with video background
│       ├── FeaturedProjects.tsx# Project showcase grid
│       ├── Services.tsx        # Services section
│       ├── Testimonials.tsx    # Client testimonials with ratings
│       ├── CTA.tsx             # Call-to-action section
│       ├── WhatsAppButton.tsx  # Floating WhatsApp button
│       ├── PageHeader.tsx      # Reusable page headers
│       ├── Modal.tsx           # Modal component
│       ├── VideoPlayer.tsx     # Video player modal
│       └── JsonLd.tsx          # SEO structured data
│
├── public/                     # Static assets
│   ├── logo.png                # Company logo
│   └── manifest.json           # PWA manifest
│
├── package.json                # Dependencies & scripts
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.ts              # Next.js configuration
```

## 🎨 Theme Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Accent | `#5CB027` | Primary brand color (green) |
| Accent Light | `#7ED348` | Hover states |
| Background | `#0a0a0a` | Dark background |
| Card | `#141414` | Card backgrounds |
| Border | `#262626` | Borders |
| Foreground | `#ededed` | Text color |
| Muted | `#a1a1a1` | Secondary text |

## 📞 Contact Information

- **Phone:** +94 76 923 8423
- **Email:** slkeyproduction@gmail.com
- **Address:** 70A, Yahampath Mawatha, Maharagama, Sri Lanka
- **Facebook:** [Key Production](https://www.facebook.com/share/1DYLA5Grao/)

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kavi9928/Event-Key-Production)

## 📜 License

This project is proprietary software owned by Key Production. All rights reserved.

---

Made with ❤️ by Key Production | Sri Lanka
