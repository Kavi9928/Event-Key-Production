'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Modal from '@/components/Modal';
import { Calendar, MapPin, Users, ArrowUpRight, Loader2 } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  attendees?: string;
  image: string;
  description: string;
  services?: string[];
  featured?: boolean;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events');
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const categories = ['All', ...new Set(events.map(e => e.category))];
  
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
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={40} className="animate-spin text-accent" />
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No events found in this category.</p>
            </div>
          ) : (
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
                        {event.attendees || 'Event'}
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
          )}
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
            {selectedEvent.services && selectedEvent.services.length > 0 && (
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
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
