'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Trash2,
  Phone,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Inbox,
} from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export default function ContactsManagement() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch('/api/admin/contacts');
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  }

  async function markAsRead(id: string) {
    try {
      await fetch('/api/admin/contacts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      setContacts(
        contacts.map((c) => (c.id === id ? { ...c, read: true } : c))
      );
    } catch (error) {
      console.error('Error marking contact as read:', error);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setContacts(contacts.filter((c) => c.id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  }

  function toggleExpand(id: string) {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      const contact = contacts.find((c) => c.id === id);
      if (contact && !contact.read) {
        markAsRead(id);
      }
    }
  }

  const filteredContacts = contacts.filter((c) => {
    if (filter === 'unread') return !c.read;
    if (filter === 'read') return c.read;
    return true;
  });

  const unreadCount = contacts.filter((c) => !c.read).length;

  return (
    <AdminShell title="Contact Submissions">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-muted">
              View and manage contact form submissions
              {unreadCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
                  {unreadCount} new
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter === 'all'
                  ? 'bg-accent text-background'
                  : 'bg-card-hover text-muted hover:text-foreground'
              }`}
            >
              All ({contacts.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter === 'unread'
                  ? 'bg-accent text-background'
                  : 'bg-card-hover text-muted hover:text-foreground'
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filter === 'read'
                  ? 'bg-accent text-background'
                  : 'bg-card-hover text-muted hover:text-foreground'
              }`}
            >
              Read ({contacts.length - unreadCount})
            </button>
          </div>
        </div>

        {/* Contacts List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-4 animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card-hover rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-card-hover rounded w-1/4" />
                    <div className="h-3 bg-card-hover rounded w-1/3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <Inbox size={48} className="mx-auto text-muted mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No contact submissions yet
            </h3>
            <p className="text-muted">
              When visitors submit the contact form, their messages will appear here
            </p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <Check size={48} className="mx-auto text-accent mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              All caught up!
            </h3>
            <p className="text-muted">
              No {filter} messages to display
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-card border rounded-xl overflow-hidden transition-colors ${
                  contact.read ? 'border-border' : 'border-accent/50'
                }`}
              >
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => toggleExpand(contact.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                          contact.read ? 'bg-muted' : 'bg-accent'
                        }`}
                      >
                        {contact.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3
                            className={`font-semibold truncate ${
                              contact.read ? 'text-muted' : 'text-foreground'
                            }`}
                          >
                            {contact.name}
                          </h3>
                          {!contact.read && (
                            <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-muted truncate">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs text-muted hidden sm:block">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteConfirm(contact.id);
                        }}
                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                      {expandedId === contact.id ? (
                        <ChevronUp size={20} className="text-muted" />
                      ) : (
                        <ChevronDown size={20} className="text-muted" />
                      )}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === contact.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 border-t border-border mt-4 pt-4 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail size={16} className="text-accent" />
                            <a
                              href={`mailto:${contact.email}`}
                              className="text-foreground hover:text-accent transition-colors"
                            >
                              {contact.email}
                            </a>
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone size={16} className="text-accent" />
                              <a
                                href={`tel:${contact.phone}`}
                                className="text-foreground hover:text-accent transition-colors"
                              >
                                {contact.phone}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar size={16} className="text-accent" />
                            <span className="text-muted">
                              {new Date(contact.createdAt).toLocaleString()}
                            </span>
                          </div>
                          {contact.service && (
                            <div className="text-sm">
                              <span className="text-muted">Service: </span>
                              <span className="text-foreground">
                                {contact.service}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="bg-background rounded-lg p-4">
                          <p className="text-foreground whitespace-pre-wrap">
                            {contact.message}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href={`mailto:${contact.email}?subject=Re: Contact from Key Production`}
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
                          >
                            <Mail size={16} />
                            Reply via Email
                          </a>
                          {contact.phone && (
                            <a
                              href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}

        {/* Delete Confirmation */}
        <AnimatePresence>
          {deleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setDeleteConfirm(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-xl p-6 max-w-sm w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Delete Message?
                </h3>
                <p className="text-muted mb-6">
                  Are you sure you want to delete this contact submission?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-card-hover transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteConfirm)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AdminShell>
  );
}
