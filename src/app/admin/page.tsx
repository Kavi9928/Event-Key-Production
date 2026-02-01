'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Image as ImageIcon,
  MessageSquare,
  Mail,
  TrendingUp,
  Bell,
  Video,
} from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';
import Link from 'next/link';

interface Stats {
  totalEvents: number;
  featuredEvents: number;
  totalGalleryItems: number;
  totalTestimonials: number;
  totalContacts: number;
  unreadContacts: number;
  totalCommercials: number;
}

const statCards = [
  {
    label: 'Total Events',
    key: 'totalEvents' as keyof Stats,
    icon: Calendar,
    color: 'bg-blue-500',
    href: '/admin/events',
  },
  {
    label: 'Commercials',
    key: 'totalCommercials' as keyof Stats,
    icon: Video,
    color: 'bg-red-500',
    href: '/admin/commercials',
  },
  {
    label: 'Gallery Items',
    key: 'totalGalleryItems' as keyof Stats,
    icon: ImageIcon,
    color: 'bg-purple-500',
    href: '/admin/gallery',
  },
  {
    label: 'Testimonials',
    key: 'totalTestimonials' as keyof Stats,
    icon: MessageSquare,
    color: 'bg-accent',
    href: '/admin/testimonials',
  },
  {
    label: 'Contact Messages',
    key: 'totalContacts' as keyof Stats,
    icon: Mail,
    color: 'bg-orange-500',
    href: '/admin/contacts',
  },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <AdminShell title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/20 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome back! 👋
              </h2>
              <p className="text-muted">
                Manage your events, gallery, testimonials, and contact submissions from here.
              </p>
            </div>
            {stats && stats.unreadContacts > 0 && (
              <Link
                href="/admin/contacts"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Bell size={18} />
                <span>{stats.unreadContacts} new message{stats.unreadContacts > 1 ? 's' : ''}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={card.href}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${card.color}`}>
                      <card.icon size={24} className="text-white" />
                    </div>
                    <TrendingUp size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-muted text-sm mb-1">{card.label}</p>
                    {loading ? (
                      <div className="h-8 w-16 bg-card-hover rounded animate-pulse" />
                    ) : (
                      <p className="text-3xl font-bold text-foreground">
                        {stats ? stats[card.key] : 0}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/admin/events?action=new"
                className="flex items-center gap-3 p-3 rounded-lg bg-card-hover hover:bg-accent/10 transition-colors"
              >
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Calendar size={18} className="text-white" />
                </div>
                <span className="text-foreground">Add New Event</span>
              </Link>
              <Link
                href="/admin/gallery?action=new"
                className="flex items-center gap-3 p-3 rounded-lg bg-card-hover hover:bg-accent/10 transition-colors"
              >
                <div className="p-2 bg-purple-500 rounded-lg">
                  <ImageIcon size={18} className="text-white" />
                </div>
                <span className="text-foreground">Add Gallery Item</span>
              </Link>
              <Link
                href="/admin/testimonials?action=new"
                className="flex items-center gap-3 p-3 rounded-lg bg-card-hover hover:bg-accent/10 transition-colors"
              >
                <div className="p-2 bg-accent rounded-lg">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <span className="text-foreground">Add Testimonial</span>
              </Link>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-muted">Dashboard initialized</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-muted">
                  {stats?.totalEvents || 0} events loaded
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-muted">
                  {stats?.totalGalleryItems || 0} gallery items loaded
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-muted">
                  {stats?.unreadContacts || 0} unread messages
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
