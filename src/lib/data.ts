// Data management for admin panel
// Using JSON files for data persistence

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Generic read function
export function readData<T>(filename: string, defaultData: T): T {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    writeData(filename, defaultData);
    return defaultData;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch {
    return defaultData;
  }
}

// Generic write function
export function writeData<T>(filename: string, data: T): void {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Event types
export interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Commercial types
export interface Commercial {
  id: string;
  title: string;
  category: string;
  client: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  duration: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Gallery types
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  createdAt: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
  createdAt: string;
}

// Contact submission types
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: string;
  read: boolean;
}

// Default data
const defaultEvents: Event[] = [
  {
    id: '1',
    title: 'Grand Corporate Gala 2024',
    category: 'Corporate Events',
    date: '2024-03-15',
    location: 'Colombo, Sri Lanka',
    description: 'A spectacular corporate gathering featuring live entertainment, gourmet dining, and networking opportunities for over 500 guests.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Dream Wedding - Perera & Fernando',
    category: 'Weddings',
    date: '2024-02-20',
    location: 'Bentota, Sri Lanka',
    description: 'An enchanting beachside wedding celebration with elegant decor, live music, and unforgettable moments.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Tech Summit Sri Lanka',
    category: 'Conferences',
    date: '2024-01-10',
    location: 'Kandy, Sri Lanka',
    description: 'Leading technology conference bringing together innovators and industry leaders for knowledge sharing and collaboration.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Music Festival Night',
    category: 'Concerts',
    date: '2024-04-20',
    location: 'Galle, Sri Lanka',
    description: 'An electrifying outdoor music festival featuring top local and international artists with state-of-the-art sound and lighting.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Product Launch - TechX',
    category: 'Product Launches',
    date: '2024-05-15',
    location: 'Colombo, Sri Lanka',
    description: 'High-profile product launch event with theatrical reveal, immersive product demonstrations, and media coordination.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Annual Awards Night',
    category: 'Corporate Events',
    date: '2024-06-10',
    location: 'Colombo, Sri Lanka',
    description: 'Prestigious awards ceremony celebrating excellence with live performances, celebrity presenters, and gala dinner.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const defaultGallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Corporate Event Setup',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Wedding Ceremony',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Commercial Shoot',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Concert Stage',
    category: 'Concerts',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Behind the Scenes',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Product Photography',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    createdAt: new Date().toISOString(),
  },
];

const defaultCommercials: Commercial[] = [
  {
    id: '1',
    title: 'Nike Air Max Launch',
    category: 'Product Launch',
    client: 'Nike',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    description: 'Cinematic product launch commercial showcasing the new Nike Air Max collection with dynamic visuals and high-energy editing.',
    duration: '0:60',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Luxury Watch Campaign',
    category: 'Luxury',
    client: 'Premium Brands',
    thumbnail: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    description: 'Elegant commercial highlighting the craftsmanship and timeless design of premium luxury timepieces.',
    duration: '0:45',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Automotive Excellence',
    category: 'Automotive',
    client: 'Auto Lanka',
    thumbnail: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    description: 'Premium automotive commercial featuring stunning cinematography and cutting-edge visual effects.',
    duration: '1:00',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Fashion Brand Story',
    category: 'Fashion',
    client: 'Ceylon Fashion',
    thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    description: 'Creative brand story video blending fashion, art, and storytelling in a visually stunning narrative.',
    duration: '2:00',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Tech Innovation Reveal',
    category: 'Technology',
    client: 'Tech Corp',
    thumbnail: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example5',
    description: 'Sleek product reveal video showcasing cutting-edge technology with minimalist aesthetic.',
    duration: '0:90',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Corporate Brand Film',
    category: 'Corporate',
    client: 'Lanka Holdings',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=example6',
    description: 'Professional corporate film communicating brand values and vision with cinematic quality.',
    duration: '3:00',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Innovations Ltd',
    content: 'Key Production transformed our annual conference into an unforgettable experience. Their attention to detail and creative vision exceeded all our expectations.',
    rating: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Global Brands Co',
    content: 'The commercial they produced for us was absolutely stunning. Professional team, incredible creativity, and delivered on time.',
    rating: 5,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Priya Fernando',
    role: 'Bride',
    company: '',
    content: 'Our wedding day was magical thanks to Key Production. Every detail was perfect, and the video they created brings tears to our eyes every time we watch it.',
    rating: 5,
    createdAt: new Date().toISOString(),
  },
];

const defaultContacts: ContactSubmission[] = [];

// Events CRUD
export function getEvents(): Event[] {
  return readData('events.json', defaultEvents);
}

export function getEvent(id: string): Event | undefined {
  const events = getEvents();
  return events.find(e => e.id === id);
}

export function createEvent(event: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Event {
  const events = getEvents();
  const newEvent: Event = {
    ...event,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  events.push(newEvent);
  writeData('events.json', events);
  return newEvent;
}

export function updateEvent(id: string, data: Partial<Event>): Event | null {
  const events = getEvents();
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return null;
  
  events[index] = {
    ...events[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  writeData('events.json', events);
  return events[index];
}

export function deleteEvent(id: string): boolean {
  const events = getEvents();
  const filtered = events.filter(e => e.id !== id);
  if (filtered.length === events.length) return false;
  writeData('events.json', filtered);
  return true;
}

// Commercial CRUD
export function getCommercials(): Commercial[] {
  return readData('commercials.json', defaultCommercials);
}

export function getCommercial(id: string): Commercial | undefined {
  const commercials = getCommercials();
  return commercials.find(c => c.id === id);
}

export function createCommercial(commercial: Omit<Commercial, 'id' | 'createdAt' | 'updatedAt'>): Commercial {
  const commercials = getCommercials();
  const newCommercial: Commercial = {
    ...commercial,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  commercials.push(newCommercial);
  writeData('commercials.json', commercials);
  return newCommercial;
}

export function updateCommercial(id: string, data: Partial<Commercial>): Commercial | null {
  const commercials = getCommercials();
  const index = commercials.findIndex(c => c.id === id);
  if (index === -1) return null;
  
  commercials[index] = {
    ...commercials[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  writeData('commercials.json', commercials);
  return commercials[index];
}

export function deleteCommercial(id: string): boolean {
  const commercials = getCommercials();
  const filtered = commercials.filter(c => c.id !== id);
  if (filtered.length === commercials.length) return false;
  writeData('commercials.json', filtered);
  return true;
}

// Gallery CRUD
export function getGallery(): GalleryItem[] {
  return readData('gallery.json', defaultGallery);
}

export function getGalleryItem(id: string): GalleryItem | undefined {
  const gallery = getGallery();
  return gallery.find(g => g.id === id);
}

export function createGalleryItem(item: Omit<GalleryItem, 'id' | 'createdAt'>): GalleryItem {
  const gallery = getGallery();
  const newItem: GalleryItem = {
    ...item,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  gallery.push(newItem);
  writeData('gallery.json', gallery);
  return newItem;
}

export function deleteGalleryItem(id: string): boolean {
  const gallery = getGallery();
  const filtered = gallery.filter(g => g.id !== id);
  if (filtered.length === gallery.length) return false;
  writeData('gallery.json', filtered);
  return true;
}

// Testimonials CRUD
export function getTestimonials(): Testimonial[] {
  return readData('testimonials.json', defaultTestimonials);
}

export function getTestimonial(id: string): Testimonial | undefined {
  const testimonials = getTestimonials();
  return testimonials.find(t => t.id === id);
}

export function createTestimonial(testimonial: Omit<Testimonial, 'id' | 'createdAt'>): Testimonial {
  const testimonials = getTestimonials();
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  testimonials.push(newTestimonial);
  writeData('testimonials.json', testimonials);
  return newTestimonial;
}

export function updateTestimonial(id: string, data: Partial<Testimonial>): Testimonial | null {
  const testimonials = getTestimonials();
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) return null;
  
  testimonials[index] = { ...testimonials[index], ...data };
  writeData('testimonials.json', testimonials);
  return testimonials[index];
}

export function deleteTestimonial(id: string): boolean {
  const testimonials = getTestimonials();
  const filtered = testimonials.filter(t => t.id !== id);
  if (filtered.length === testimonials.length) return false;
  writeData('testimonials.json', filtered);
  return true;
}

// Contact submissions
export function getContactSubmissions(): ContactSubmission[] {
  return readData('contacts.json', defaultContacts);
}

export function addContactSubmission(submission: Omit<ContactSubmission, 'id' | 'createdAt' | 'read'>): ContactSubmission {
  const contacts = getContactSubmissions();
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  contacts.unshift(newSubmission);
  writeData('contacts.json', contacts);
  return newSubmission;
}

export function markContactAsRead(id: string): boolean {
  const contacts = getContactSubmissions();
  const index = contacts.findIndex(c => c.id === id);
  if (index === -1) return false;
  
  contacts[index].read = true;
  writeData('contacts.json', contacts);
  return true;
}

export function deleteContactSubmission(id: string): boolean {
  const contacts = getContactSubmissions();
  const filtered = contacts.filter(c => c.id !== id);
  if (filtered.length === contacts.length) return false;
  writeData('contacts.json', filtered);
  return true;
}

// Stats for dashboard
export function getDashboardStats() {
  const events = getEvents();
  const gallery = getGallery();
  const testimonials = getTestimonials();
  const contacts = getContactSubmissions();
  const unreadContacts = contacts.filter(c => !c.read).length;
  const commercials = getCommercials();

  return {
    totalEvents: events.length,
    featuredEvents: events.filter(e => e.featured).length,
    totalCommercials: commercials.length,
    totalGalleryItems: gallery.length,
    totalTestimonials: testimonials.length,
    totalContacts: contacts.length,
    unreadContacts,
  };
}
