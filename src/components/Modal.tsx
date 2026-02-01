'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full max-w-4xl max-h-full overflow-auto bg-card rounded-2xl border border-border shadow-2xl pointer-events-auto">
              {/* Header */}
              {title && (
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-card">
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-border/50 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} className="text-muted" />
                  </button>
                </div>
              )}
              
              {/* Close button for modals without title */}
              {!title && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-foreground" />
                </button>
              )}
              
              {/* Content */}
              <div className={title ? 'p-6' : ''}>
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
