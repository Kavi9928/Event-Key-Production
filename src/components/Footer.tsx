'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import ThemeLogo from './ThemeLogo';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const footerLinks = {
  services: [
    { label: 'Event Production', href: '/events' },
    { label: 'Commercial Videos', href: '/commercial' },
    { label: 'Corporate Events', href: '/events' },
    { label: 'Live Streaming', href: '/commercial' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Careers', href: '/contact' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <ThemeLogo width={180} height={68} className="h-14 w-auto" />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Crafting unforgettable experiences through world-class event production 
              and cinematic commercial content.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-border/50 flex items-center justify-center text-muted hover:bg-accent hover:text-background transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted text-sm">
                  70A, Yahampath Mawatha<br />
                  Maharagama, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+94769238423" className="text-muted text-sm hover:text-accent transition-colors">
                  +94 76 923 8423
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:slkeyproduction@gmail.com" className="text-muted text-sm hover:text-accent transition-colors">
                  slkeyproduction@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Key Production. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
