'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Star,
  Video,
  Clock,
  Building2,
  Save,
  Loader2,
  Play,
} from 'lucide-react';
import AdminShell from '@/components/admin/AdminShell';

interface Commercial {
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

const categories = [
  'Product Launch',
  'Luxury',
  'Automotive',
  'Beauty',
  'Technology',
  'Fashion',
  'Beverage',
  'Hospitality',
  'Corporate',
  'Other',
];

export default function CommercialsManagement() {
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCommercial, setEditingCommercial] = useState<Commercial | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Product Launch',
    client: '',
    thumbnail: '',
    videoUrl: '',
    description: '',
    duration: '',
    featured: false,
  });

  useEffect(() => {
    fetchCommercials();
  }, []);

  async function fetchCommercials() {
    try {
      const res = await fetch('/api/admin/commercials');
      if (res.ok) {
        const data = await res.json();
        setCommercials(data);
      }
    } catch (error) {
      console.error('Error fetching commercials:', error);
    } finally {
      setLoading(false);
    }
  }

  function openNewCommercialModal() {
    setEditingCommercial(null);
    setFormData({
      title: '',
      category: 'Product Launch',
      client: '',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      videoUrl: '',
      description: '',
      duration: '0:30',
      featured: false,
    });
    setShowModal(true);
  }

  function openEditCommercialModal(commercial: Commercial) {
    setEditingCommercial(commercial);
    setFormData({
      title: commercial.title,
      category: commercial.category,
      client: commercial.client,
      thumbnail: commercial.thumbnail,
      videoUrl: commercial.videoUrl,
      description: commercial.description,
      duration: commercial.duration,
      featured: commercial.featured,
    });
    setShowModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const url = '/api/admin/commercials';
      const method = editingCommercial ? 'PUT' : 'POST';
      const body = editingCommercial
        ? { id: editingCommercial.id, ...formData }
        : formData;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        await fetchCommercials();
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error saving commercial:', error);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/admin/commercials?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setCommercials(commercials.filter((c) => c.id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error('Error deleting commercial:', error);
    }
  }

  return (
    <AdminShell title="Commercials Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-muted">Manage your commercial productions and videos</p>
          <button
            onClick={openNewCommercialModal}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Plus size={20} />
            Add Commercial
          </button>
        </div>

        {/* Commercials List */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl overflow-hidden animate-pulse"
              >
                <div className="aspect-video bg-card-hover" />
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-card-hover rounded w-3/4" />
                  <div className="h-4 bg-card-hover rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : commercials.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <Video size={48} className="mx-auto text-muted mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No commercials yet
            </h3>
            <p className="text-muted mb-4">
              Get started by adding your first commercial
            </p>
            <button
              onClick={openNewCommercialModal}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Plus size={20} />
              Add Commercial
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercials.map((commercial) => (
              <motion.div
                key={commercial.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-xl overflow-hidden group"
              >
                <div className="aspect-video bg-card-hover relative overflow-hidden">
                  {commercial.thumbnail && (
                    <img
                      src={commercial.thumbnail}
                      alt={commercial.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={20} className="text-white ml-1" />
                    </div>
                  </div>
                  {commercial.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-accent text-background text-xs font-medium rounded flex items-center gap-1">
                      <Star size={12} />
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                    {commercial.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => openEditCommercialModal(commercial)}
                      className="p-2 bg-white text-background rounded-lg hover:bg-accent transition-colors"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(commercial.id)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                    {commercial.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted mb-1">
                    <Building2 size={14} />
                    <span>{commercial.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock size={14} />
                    <span>{commercial.duration}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs px-2 py-1 bg-card-hover text-muted rounded">
                      {commercial.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add/Edit Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">
                    {editingCommercial ? 'Edit Commercial' : 'Add New Commercial'}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 text-muted hover:text-foreground rounded-lg hover:bg-card-hover transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                      placeholder="Commercial title"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Client *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.client}
                        onChange={(e) =>
                          setFormData({ ...formData, client: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                        placeholder="Client name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Thumbnail URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.thumbnail}
                      onChange={(e) =>
                        setFormData({ ...formData, thumbnail: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Video URL
                    </label>
                    <input
                      type="text"
                      value={formData.videoUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, videoUrl: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Duration *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.duration}
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent"
                      placeholder="0:30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent resize-none"
                      placeholder="Commercial description..."
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) =>
                        setFormData({ ...formData, featured: e.target.checked })
                      }
                      className="w-4 h-4 accent-accent"
                    />
                    <label
                      htmlFor="featured"
                      className="text-sm text-foreground cursor-pointer"
                    >
                      Featured commercial
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-card-hover transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                    >
                      {saving ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <Save size={20} />
                      )}
                      {saving ? 'Saving...' : 'Save Commercial'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                  Delete Commercial?
                </h3>
                <p className="text-muted mb-6">
                  Are you sure you want to delete this commercial? This action cannot
                  be undone.
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
