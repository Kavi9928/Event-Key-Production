'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Modal from '@/components/Modal';
import { Play, Filter } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Nike Air Max Launch',
    category: 'Product Launch',
    client: 'Nike',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video1.mp4',
    description: 'Cinematic product launch commercial showcasing the new Nike Air Max collection with dynamic visuals and high-energy editing.',
    duration: '0:60',
  },
  {
    id: 2,
    title: 'Luxury Watch Campaign',
    category: 'Luxury',
    client: 'Rolex',
    thumbnail: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video2.mp4',
    description: 'Elegant commercial highlighting the craftsmanship and timeless design of premium luxury timepieces.',
    duration: '0:45',
  },
  {
    id: 3,
    title: 'Automotive Excellence',
    category: 'Automotive',
    client: 'Mercedes-Benz',
    thumbnail: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video3.mp4',
    description: 'Premium automotive commercial featuring stunning cinematography and cutting-edge visual effects.',
    duration: '1:00',
  },
  {
    id: 4,
    title: 'Fragrance Campaign',
    category: 'Beauty',
    client: 'Dior',
    thumbnail: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video4.mp4',
    description: 'Sensual and artistic fragrance commercial capturing the essence of luxury and sophistication.',
    duration: '0:30',
  },
  {
    id: 5,
    title: 'Tech Innovation Reveal',
    category: 'Technology',
    client: 'Apple',
    thumbnail: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video5.mp4',
    description: 'Sleek product reveal video showcasing cutting-edge technology with minimalist aesthetic.',
    duration: '0:90',
  },
  {
    id: 6,
    title: 'Fashion Brand Story',
    category: 'Fashion',
    client: 'Gucci',
    thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video6.mp4',
    description: 'Creative brand story video blending fashion, art, and storytelling in a visually stunning narrative.',
    duration: '2:00',
  },
  {
    id: 7,
    title: 'Sports Energy Drink',
    category: 'Beverage',
    client: 'Red Bull',
    thumbnail: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video7.mp4',
    description: 'High-octane commercial featuring extreme sports and adrenaline-pumping action sequences.',
    duration: '0:45',
  },
  {
    id: 8,
    title: 'Hospitality Experience',
    category: 'Hospitality',
    client: 'Four Seasons',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video8.mp4',
    description: 'Luxurious hospitality commercial showcasing world-class service and breathtaking destinations.',
    duration: '1:30',
  },
  {
    id: 9,
    title: 'Corporate Brand Film',
    category: 'Corporate',
    client: 'Goldman Sachs',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/video9.mp4',
    description: 'Professional corporate film communicating brand values and vision with cinematic quality.',
    duration: '3:00',
  },
];

const categories = ['All', 'Product Launch', 'Luxury', 'Automotive', 'Beauty', 'Technology', 'Fashion', 'Beverage', 'Hospitality', 'Corporate'];

interface Video {
  id: number;
  title: string;
  category: string;
  client: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  duration: string;
}

export default function CommercialPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showFilters, setShowFilters] = useState(false);

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
