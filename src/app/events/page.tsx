'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Modal from '@/components/Modal';
import { Calendar, MapPin, Users, ArrowUpRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Global Music Festival 2025',
    category: 'Music Festival',
    date: 'December 15-17, 2025',
    location: 'Los Angeles, CA',
    attendees: '50,000+',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    description: 'A three-day celebration of music featuring world-renowned artists across multiple stages. We handled complete production including stage design, lighting, sound systems, and live broadcasting.',
    services: ['Stage Design', 'Lighting', 'Sound Engineering', 'Live Streaming', 'Artist Management'],
  },
  {
    id: 2,
    title: 'Tech Summit Conference',
    category: 'Corporate',
    date: 'November 8-10, 2025',
    location: 'San Francisco, CA',
    attendees: '5,000+',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    description: 'Annual technology conference bringing together industry leaders and innovators. Full production services including keynote presentations, breakout sessions, and networking events.',
    services: ['AV Production', 'Stage Design', 'Live Streaming', 'Event Management'],
  },
  {
    id: 3,
    title: 'Fashion Week Gala',
    category: 'Fashion',
    date: 'September 20, 2025',
    location: 'New York, NY',
    attendees: '2,000+',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'Exclusive fashion gala showcasing top designers with runway shows and celebrity appearances. Elegant production with dramatic lighting and immersive experiences.',
    services: ['Runway Production', 'Lighting Design', 'Sound Design', 'VIP Experience'],
  },
  {
    id: 4,
    title: 'Sports Awards Ceremony',
    category: 'Awards Show',
    date: 'August 5, 2025',
    location: 'Las Vegas, NV',
    attendees: '3,500+',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    description: 'Prestigious sports awards ceremony celebrating athletic excellence. Complete show production with live performances, celebrity presenters, and broadcast coordination.',
    services: ['Show Production', 'Stage Design', 'Broadcast Production', 'Talent Coordination'],
  },
  {
    id: 5,
    title: 'Product Launch Event',
    category: 'Corporate',
    date: 'July 12, 2025',
    location: 'Austin, TX',
    attendees: '1,500+',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
    description: 'High-profile product launch for a leading tech company. Theatrical reveal with immersive product demonstrations and media coordination.',
    services: ['Product Reveal', 'Demo Stations', 'Media Coordination', 'VIP Hospitality'],
  },
  {
    id: 6,
    title: 'Charity Gala Night',
    category: 'Charity',
    date: 'June 25, 2025',
    location: 'Miami, FL',
    attendees: '800+',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    description: 'Elegant charity fundraiser with live auction, entertainment, and gourmet dining. Sophisticated production creating an atmosphere of luxury and generosity.',
    services: ['Event Design', 'Entertainment', 'Auction Production', 'Catering Coordination'],
  },
];

const categories = ['All', 'Music Festival', 'Corporate', 'Fashion', 'Awards Show', 'Charity'];

interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  description: string;
  services: string[];
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Our Events"
        subtitle="Live Productions"
        description="From intimate gatherings to massive festivals, we bring extraordinary events to life with precision and creativity."
      />

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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

      {/* Events Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div
                  onClick={() => setSelectedEvent(event)}
                  className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-accent" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-accent" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-accent" />
                        {event.attendees} Attendees
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium">
                      View Details
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
      >
        {selectedEvent && (
          <div>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full aspect-video object-cover rounded-xl mb-6"
            />
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-background rounded-xl">
                <Calendar size={20} className="text-accent mx-auto mb-2" />
                <div className="text-xs text-muted">Date</div>
                <div className="text-sm font-medium text-foreground">{selectedEvent.date}</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <MapPin size={20} className="text-accent mx-auto mb-2" />
                <div className="text-xs text-muted">Location</div>
                <div className="text-sm font-medium text-foreground">{selectedEvent.location}</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl">
                <Users size={20} className="text-accent mx-auto mb-2" />
                <div className="text-xs text-muted">Attendees</div>
                <div className="text-sm font-medium text-foreground">{selectedEvent.attendees}</div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              {selectedEvent.description}
            </p>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Services Provided</h4>
              <div className="flex flex-wrap gap-2">
                {selectedEvent.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
