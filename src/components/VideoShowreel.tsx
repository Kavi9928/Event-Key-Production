'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function VideoShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Showreel
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              See Our Work <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Watch our showreel to experience the magic we create. From spectacular 
              events to cinematic commercials, every project showcases our commitment 
              to excellence and creativity.
            </p>

            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-3xl font-bold text-accent">200+</div>
                <div className="text-muted text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-muted text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-muted text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-background border border-border">
              {/* Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop"
                alt="Showreel thumbnail"
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30"
                  >
                    <Play size={32} className="text-background ml-1" fill="currentColor" />
                  </motion.button>
                </motion.div>
              )}

              {/* Video Player */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black">
                  <video
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-accent/10 rounded-2xl -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
