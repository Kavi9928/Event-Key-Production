'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, Send, ArrowUpRight, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1DYLA5Grao/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:bg-blue-600' },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function AnimatedFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-card overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: 'M0,0 C300,100 900,0 1200,80 L1200,0 L0,0 Z' }}
            animate={{
              d: [
                'M0,0 C300,100 900,0 1200,80 L1200,0 L0,0 Z',
                'M0,0 C300,20 900,100 1200,40 L1200,0 L0,0 Z',
                'M0,0 C300,100 900,0 1200,80 L1200,0 L0,0 Z',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            fill="var(--background)"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12"
      >
        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-3"
              >
                Stay in the <span className="gradient-text">Loop</span>
              </motion.h3>
              <p className="text-muted">
                Subscribe to get updates on our latest projects and exclusive behind-the-scenes content.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-background border border-border rounded-full text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-colors flex items-center gap-2"
              >
                {isSubscribed ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    ✓ Subscribed!
                  </motion.span>
                ) : (
                  <>
                    <Send size={18} />
                    <span className="hidden sm:inline">Subscribe</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Image
                  src="/logo.png"
                  alt="Key Production"
                  width={140}
                  height={52}
                  className="h-10 w-auto"
                />
              </motion.div>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Crafting unforgettable experiences through world-class event production 
              and cinematic commercial content.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-border/50 flex items-center justify-center text-muted hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🎬
              </motion.span>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group text-muted text-sm hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🏢
              </motion.span>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group text-muted text-sm hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                📍
              </motion.span>
              Contact
            </h4>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors"
                >
                  <MapPin size={16} className="text-accent" />
                </motion.div>
                <span className="text-muted text-sm group-hover:text-foreground transition-colors">
                  70A, Yahampath Mawatha<br />
                  Maharagama, Sri Lanka
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors"
                >
                  <Phone size={16} className="text-accent" />
                </motion.div>
                <a href="tel:+94769238423" className="text-muted text-sm group-hover:text-accent transition-colors">
                  +94 76 923 8423
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors"
                >
                  <Mail size={16} className="text-accent" />
                </motion.div>
                <a href="mailto:slkeyproduction@gmail.com" className="text-muted text-sm group-hover:text-accent transition-colors">
                  slkeyproduction@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="text-muted text-sm flex items-center gap-2"
            >
              © {new Date().getFullYear()} Key Production. Made with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-500 fill-red-500" />
              </motion.span>
              All rights reserved.
            </motion.p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <Link 
                    href={item === 'Privacy Policy' ? '/privacy' : '/terms'} 
                    className="text-muted text-sm hover:text-accent transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: 1.2, type: 'spring' }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-shadow z-50"
          aria-label="Back to top"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="m18 15-6-6-6 6" />
          </motion.svg>
        </motion.button>
      </motion.div>
    </footer>
  );
}
