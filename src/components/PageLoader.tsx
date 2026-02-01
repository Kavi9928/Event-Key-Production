'use client';

import { motion } from 'framer-motion';
import ThemeLogo from './ThemeLogo';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-24 h-24 relative flex items-center justify-center"
        >
          <ThemeLogo width={96} height={96} className="w-full h-full object-contain" />
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted text-sm"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}

// Skeleton Components for Content Loading
export function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border">
      <div className="aspect-video bg-border animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-border rounded animate-pulse w-3/4" />
        <div className="h-3 bg-border rounded animate-pulse w-1/2" />
        <div className="space-y-2">
          <div className="h-3 bg-border rounded animate-pulse" />
          <div className="h-3 bg-border rounded animate-pulse w-5/6" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 bg-border rounded animate-pulse"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar({ size = 48 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-border animate-pulse"
      style={{ width: size, height: size }}
    />
  );
}

export function SkeletonImage({ aspectRatio = '16/9' }: { aspectRatio?: string }) {
  return (
    <div
      className="bg-border rounded-lg animate-pulse"
      style={{ aspectRatio }}
    />
  );
}
