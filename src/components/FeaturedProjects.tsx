'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Global Music Festival 2025',
    category: 'Live Event',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    href: '/events/global-music-festival',
  },
  {
    id: 2,
    title: 'Nike Air Max Launch',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    href: '/commercial/nike-air-max',
  },
  {
    id: 3,
    title: 'Tech Summit Conference',
    category: 'Corporate Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    href: '/events/tech-summit',
  },
  {
    id: 4,
    title: 'Luxury Watch Campaign',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop',
    href: '/commercial/luxury-watch',
  },
  {
    id: 5,
    title: 'Fashion Week Gala',
    category: 'Fashion Event',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    href: '/events/fashion-week',
  },
  {
    id: 6,
    title: 'Automotive Commercial',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=600&fit=crop',
    href: '/commercial/automotive',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Explore our latest productions that showcase our commitment to 
            excellence and creative innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={project.href} className="group block relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-accent text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground/80 group-hover:text-accent transition-colors">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
