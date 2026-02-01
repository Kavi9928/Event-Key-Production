'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What types of events do you produce?',
    answer: 'We specialize in a wide range of events including corporate conferences, music festivals, product launches, weddings, award ceremonies, concerts, and private parties. No event is too big or too small for our team.',
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 2-3 months in advance for major events to ensure availability and proper planning time. However, we also accommodate last-minute requests when possible. Contact us early for the best experience.',
  },
  {
    question: 'Do you provide video production services?',
    answer: 'Yes! We offer comprehensive video production services including commercial ads, promotional videos, music videos, corporate videos, event coverage, and live streaming. Our team uses professional cinema-grade equipment.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We are based in Maharagama, Sri Lanka, and serve clients throughout Sri Lanka. We also take on international projects and can travel for destination events and productions.',
  },
  {
    question: 'Can you work within my budget?',
    answer: 'Absolutely! We offer flexible packages to accommodate various budgets. During our consultation, we\'ll discuss your vision and create a customized proposal that delivers maximum value within your budget.',
  },
  {
    question: 'What is included in your event production package?',
    answer: 'Our packages typically include event planning, stage design, lighting, sound systems, visual effects, and technical crew. We customize each package based on your specific needs and can add services like photography, videography, and live streaming.',
  },
  {
    question: 'Do you offer equipment rental?',
    answer: 'Yes, we offer rental services for professional audio, lighting, and video equipment. All rentals include delivery, setup, and technical support to ensure everything runs smoothly.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply contact us through our website, WhatsApp, or phone. We\'ll schedule a free consultation to discuss your event, understand your vision, and provide a detailed proposal. Let\'s create something amazing together!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re 
            looking for, feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-accent text-background' : 'bg-border text-muted'
                  }`}
                >
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-muted leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center p-8 bg-card rounded-2xl border border-border"
        >
          <p className="text-muted mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
