'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Contact Us"
        description="Ready to start your next project? We'd love to hear from you. Let's create something extraordinary together."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-muted text-sm">
                      70A, Yahampath Mawatha<br />
                      Maharagama, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+94769238423" className="text-muted text-sm hover:text-accent transition-colors">
                      +94 76 923 8423
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:slkeyproduction@gmail.com" className="text-muted text-sm hover:text-accent transition-colors">
                      slkeyproduction@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted mb-8">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                            placeholder="+94 7X XXX XXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                          >
                            <option value="">Select a project type</option>
                            <option value="event">Event Production</option>
                            <option value="commercial">Commercial Production</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="concert">Concert/Festival</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                            Estimated Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-100">Under $100</option>
                            <option value="100-300">$100 - $300</option>
                            <option value="300-500">$300 - $500</option>
                            <option value="500-1000">$500 - $1,000</option>
                            <option value="1000-5000">$1,000 - $5,000</option>
                            <option value="5000+">$5,000+</option>
                            <option value="custom">Custom (specify in message)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-[400px] md:h-[500px] relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.456236992457!2d79.92602537475626!3d6.835774693162253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251ed1131918d%3A0xa490d1841ef9b936!2skey%20production%2C%2070A%2C%20Yahampath%20Mawatha%2C%20Maharagama!5e0!3m2!1sen!2slk!4v1769933712768!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Key Production Office Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-card/95 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-xl max-w-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Visit Our Studio</h3>
                <p className="text-muted text-sm mb-3">
                  70A, Yahampath Mawatha<br />
                  Maharagama, Sri Lanka
                </p>
                <a
                  href="https://maps.google.com/?q=key+production,70A,Yahampath+Mawatha,Maharagama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-medium hover:text-accent-light transition-colors inline-flex items-center gap-1"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
