'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Ready to Start?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Let&apos;s Create Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Whether you&apos;re planning a grand event or need a compelling commercial, 
            our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
