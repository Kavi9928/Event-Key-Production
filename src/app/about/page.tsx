'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { Users, Target, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'James Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'With over 20 years in production, James founded Key Production with a vision to create extraordinary experiences.',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Sarah brings artistic vision and innovative concepts to every project, ensuring each production is unique.',
  },
  {
    name: 'Michael Torres',
    role: 'Head of Production',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Michael oversees all production operations, bringing technical expertise and flawless execution.',
  },
  {
    name: 'Emily Park',
    role: 'Director of Events',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Emily leads our events division, transforming client visions into spectacular live experiences.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue perfection in every detail, delivering productions that exceed expectations.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for storytelling and live experiences drives everything we create.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and creative approaches to push boundaries.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, becoming true partners in bringing their vision to life.',
  },
];

const milestones = [
  { year: '2012', event: 'Key Production founded in Los Angeles' },
  { year: '2014', event: 'First major music festival production' },
  { year: '2016', event: 'Expanded into commercial video production' },
  { year: '2018', event: 'Won "Best Production Company" award' },
  { year: '2020', event: 'Launched virtual events division' },
  { year: '2022', event: 'Opened New York office' },
  { year: '2024', event: 'Celebrated 500+ productions milestone' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Our Story"
        description="We're a passionate team of creatives, technicians, and storytellers dedicated to producing extraordinary experiences."
      />

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting <span className="gradient-text">Unforgettable</span> Moments Since 2012
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Key Production was born from a simple belief: every event and every story 
                deserves to be told with excellence. What started as a small team with big 
                dreams has grown into a full-service production company trusted by the 
                world&apos;s leading brands and organizations.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                From intimate corporate gatherings to massive music festivals, from 
                30-second commercials to feature-length brand films, we bring the same 
                level of dedication and creativity to every project.
              </p>
              <p className="text-muted leading-relaxed">
                Our secret? A passionate team, cutting-edge technology, and an unwavering 
                commitment to exceeding our clients&apos; expectations every single time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-background p-6 rounded-xl">
                <div className="text-4xl font-bold">12+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-background rounded-2xl border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              The People Behind Key
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Key <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 hidden md:block" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />
                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 bg-background rounded-xl border border-border">
                    <span className="text-accent font-bold text-lg">{milestone.year}</span>
                    <p className="text-foreground mt-2">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-xl text-muted mb-10">
              Let&apos;s create something extraordinary for your next project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
