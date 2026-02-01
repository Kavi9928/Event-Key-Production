'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            {subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {i === title.split(' ').length - 1 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  <span className="text-foreground">{word} </span>
                )}
              </span>
            ))}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg text-muted">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
