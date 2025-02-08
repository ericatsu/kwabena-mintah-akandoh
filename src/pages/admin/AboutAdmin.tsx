import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Plus, Trash2, Save, Edit, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { IMilestone, ICoreValue, IAchievement, IFAQ } from '@/types/about';

const API_BASE_URL = 'https://kma.onrender.com/api';

type SectionItem = IMilestone | ICoreValue | IAchievement | IFAQ;

interface SectionManagerProps<T extends SectionItem> {
    title: string;
    endpoint: string;
    emptyItem: T;
    fields: Record<string, { label: string; type: 'input' | 'textarea' }>;
}

function SectionManager<T extends SectionItem>({
    title,
    endpoint,
    emptyItem,
    fields
}: SectionManagerProps<T>) {
    const [items, setItems] = useState<T[]>([]);
    const [editingItem, setEditingItem] = useState<(T & { _id?: string }) | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchItems();
    }, [endpoint]);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${API_BASE_URL}/${endpoint}`);
            if (!res.ok) throw new Error(`Error fetching ${title}`);
            const data = await res.json();
            setItems(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async () => {
        setEditingItem({ ...emptyItem });
    };

    const handleEdit = (item: T & { _id: string }) => {
        setEditingItem(item);
    };

    const handleSave = async () => {
        if (!editingItem) return;

        try {
            setLoading(true);
            const method = editingItem._id ? 'PUT' : 'POST';
            const url = `${API_BASE_URL}/${endpoint}${editingItem._id ? `/${editingItem._id}` : ''}`;

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingItem)
            });

            if (!res.ok) throw new Error(`Error ${editingItem._id ? 'updating' : 'creating'} ${title}`);

            setSuccess(`${title} ${editingItem._id ? 'updated' : 'created'} successfully`);
            setEditingItem(null);
            fetchItems();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            const res = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
                method: 'DELETE'
            });

            if (!res.ok) throw new Error(`Error deleting ${title}`);

            setSuccess(`${title} deleted successfully`);
            fetchItems();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateField = (field: keyof T, value: string) => {
        if (editingItem) {
            setEditingItem({ ...editingItem, [field]: value });
        }
    };

    return (
        <Card className="mb-8">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>{title}</CardTitle>
                    <Button onClick={handleCreate} disabled={loading || !!editingItem}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add New
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <AnimatePresence>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {success && (
                        <Alert className="mb-4 bg-green-50 border-green-200">
                            <AlertDescription className="text-green-800">{success}</AlertDescription>
                        </Alert>
                    )}
                </AnimatePresence>

                {editingItem && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-6 p-4 border rounded-lg"
                    >
                        <div className="space-y-4">
                            {Object.entries(fields).map(([key, { label, type }]) => (
                                <div key={key}>
                                    <label className="block text-sm font-medium mb-1">{label}</label>
                                    {type === 'textarea' ? (
                                        <Textarea
                                            value={(editingItem as any)[key] || ''}
                                            onChange={(e) => handleUpdateField(key as keyof T, e.target.value)}
                                            className="w-full"
                                        />
                                    ) : (
                                        <Input
                                            value={(editingItem as any)[key] || ''}
                                            onChange={(e) => handleUpdateField(key as keyof T, e.target.value)}
                                            className="w-full"
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="flex gap-2 justify-end">
                                <Button
                                    variant="outline"
                                    onClick={() => setEditingItem(null)}
                                    disabled={loading}
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button onClick={handleSave} disabled={loading}>
                                    {loading ? <Loader2 className="animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                    Save
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={(item as any)._id ?? index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 border rounded-lg"
                        >
                            <div className="flex justify-between items-start">
                                <div className="space-y-2 flex-1">
                                    {Object.entries(fields).map(([key, { label }]) => (
                                        <div key={key}>
                                            <span className="font-medium">{label}: </span>
                                            <span>{(item as any)[key]}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleEdit(item as any)}
                                        disabled={loading || !!editingItem}
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete((item as any)._id ?? index)}
                                        disabled={loading || !!editingItem}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export const AboutAdmin: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">About Page Management</h1>

            <SectionManager<IMilestone>
                title="Milestones"
                endpoint="milestones"
                emptyItem={{ year: '', title: '', description: '' }}
                fields={{
                    year: { label: 'Year', type: 'input' },
                    title: { label: 'Title', type: 'input' },
                    description: { label: 'Description', type: 'textarea' }
                }}
            />

            <SectionManager<ICoreValue>
                title="Core Values"
                endpoint="core-values"
                emptyItem={{ title: '', description: '' }}
                fields={{
                    title: { label: 'Title', type: 'input' },
                    description: { label: 'Description', type: 'textarea' }
                }}
            />

            <SectionManager<IAchievement>
                title="Achievements"
                endpoint="achievements"
                emptyItem={{ title: '', description: '' }}
                fields={{
                    title: { label: 'Title', type: 'input' },
                    description: { label: 'Description', type: 'textarea' }
                }}
            />

            <SectionManager<IFAQ>
                title="FAQs"
                endpoint="faqs"
                emptyItem={{ question: '', answer: '' }}
                fields={{
                    question: { label: 'Question', type: 'input' },
                    answer: { label: 'Answer', type: 'textarea' }
                }}
            />
        </div>
    );
};

export default AboutAdmin;