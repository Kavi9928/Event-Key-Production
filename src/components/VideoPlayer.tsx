'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  thumbnail: string;
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ thumbnail, videoUrl, title }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail with Play Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30"
          >
            <Play size={28} className="text-background ml-1" fill="currentColor" />
          </motion.div>
        </div>
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
          <h4 className="text-foreground font-semibold">{title}</h4>
        </div>
      </motion.div>

      {/* Video Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="video-container">
          {/* In production, replace with actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-card">
            <div className="text-center">
              <Play size={64} className="text-accent mx-auto mb-4" />
              <p className="text-muted">Video: {title}</p>
              <p className="text-sm text-muted/60 mt-2">{videoUrl}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
