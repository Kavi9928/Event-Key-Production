'use client';

import { motion } from 'framer-motion';
import { Sparkles, Video, Users, Zap, Award, Globe } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Event Production',
    description: 'From intimate gatherings to large-scale festivals, we bring your vision to life with meticulous planning and flawless execution.',
  },
  {
    icon: Video,
    title: 'Commercial Production',
    description: 'Cinematic commercials and brand videos that captivate audiences and drive results for your business.',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Professional conferences, product launches, and corporate gatherings that leave lasting impressions.',
  },
  {
    icon: Zap,
    title: 'Live Streaming',
    description: 'High-quality live streaming solutions to reach global audiences in real-time with professional production value.',
  },
  {
    icon: Award,
    title: 'Award Shows',
    description: 'Prestigious award ceremonies with stunning stage design, lighting, and seamless show management.',
  },
  {
    icon: Globe,
    title: 'Virtual Events',
    description: 'Immersive virtual and hybrid experiences that engage audiences anywhere in the world.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-card">
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
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            We offer a comprehensive range of production services to meet 
            all your creative needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-background rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
