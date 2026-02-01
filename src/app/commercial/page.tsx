'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Modal from '@/components/Modal';
import { Play, Filter, Loader2 } from 'lucide-react';

const categories = ['All', 'Product Launch', 'Luxury', 'Automotive', 'Beauty', 'Technology', 'Fashion', 'Beverage', 'Hospitality', 'Corporate'];

interface Video {
  id: string;
  title: string;
  category: string;
  client: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  duration: string;
  featured?: boolean;
}

export default function CommercialPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function fetchCommercials() {
      try {
        const res = await fetch('/api/commercials');
        if (res.ok) {
          const data = await res.json();
          setVideos(data);
        }
      } catch (error) {
        console.error('Error fetching commercials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCommercials();
  }, []);

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Commercial Production"
        subtitle="Video & Film"
        description="Cinematic commercials and brand videos that captivate audiences and elevate your brand to new heights."
      />

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg mb-4"
          >
            <Filter size={16} />
            Filter by Category
          </button>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap gap-3 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowFilters(false);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-background'
                    : 'bg-card text-muted hover:text-foreground border border-border hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={40} className="animate-spin text-accent" />
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No commercials found in this category.</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div
                  onClick={() => setSelectedVideo(video)}
                  className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Play size={24} className="text-background ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-3 right-3 px-2 py-1 bg-background/80 text-foreground text-xs font-medium rounded">
                      {video.duration}
                    </span>

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-accent font-medium mb-1">
                      {video.client}
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      >
        {selectedVideo && (
          <div>
            {/* Video Player Placeholder */}
            <div className="aspect-video bg-background rounded-t-xl flex items-center justify-center relative">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-accent flex items-center justify-center cursor-pointer"
                >
                  <Play size={36} className="text-background ml-1" fill="currentColor" />
                </motion.div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {selectedVideo.category}
                </span>
                <span className="text-muted text-sm">
                  {selectedVideo.duration}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-accent font-medium mb-4">
                Client: {selectedVideo.client}
              </p>
              <p className="text-muted leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
