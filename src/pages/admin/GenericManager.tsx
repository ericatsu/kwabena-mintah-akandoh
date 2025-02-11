import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Save, Edit, X, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '@/lib/utils';

interface FieldConfig {
    label: string;
    type: 'input' | 'textarea' | 'datePicker' | 'select';
}


interface GenericManagerProps<T extends { _id?: string }> {
    title: string;
    endpoint: string;
    emptyItem: Omit<T, '_id'>;  // Remove _id from required fields
    fields: Partial<Record<keyof T, FieldConfig>>; // Make fields partial
}

export function GenericManager<T extends { _id?: string }>({
    title,
    endpoint,
    emptyItem,
    fields
}: GenericManagerProps<T>) {
    const [items, setItems] = useState<T[]>([]);
    const [editingItem, setEditingItem] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [endpoint]);

    async function fetchItems() {
        try {
            setLoading(true);
            const res = await fetch(`${API_BASE_URL}/${endpoint}`);
            if (!res.ok) {
                throw new Error(`Error fetching ${title}`);
            }
            const data = await res.json();
            setItems(data);
        } catch (err: any) {
            setError(err.message ?? 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    function handleCreate() {
        setEditingItem({ ...emptyItem } as T);
    }

    function handleEdit(item: T) {
        setEditingItem(item);
    }

    async function handleDelete(id: string) {
        try {
            setLoading(true);
            const res = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new Error(`Error deleting ${title}`);
            }
            setSuccess(`${title} deleted successfully`);
            fetchItems();
        } catch (err: any) {
            setError(err.message ?? 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    async function handleSave() {
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
            if (!res.ok) {
                throw new Error(`Error ${editingItem._id ? 'updating' : 'creating'} ${title}`);
            }
            setSuccess(`${title} ${editingItem._id ? 'updated' : 'created'} successfully`);
            setEditingItem(null);
            fetchItems();
        } catch (err: any) {
            setError(err.message ?? 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    function handleUpdateField(field: keyof T, value: string) {
        if (!editingItem) return;
        // basic approach: store everything as a string
        // advanced approach: parse date, parse number, etc. as needed
        setEditingItem({ ...editingItem, [field]: value } as T);
    }

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
                            <AlertDescription className="text-green-800">
                                {success}
                            </AlertDescription>
                        </Alert>
                    )}
                </AnimatePresence>

                {/* The form for editing/creating an item */}
                {editingItem && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-6 p-4 border rounded-lg"
                    >
                        <div className="space-y-4">
                            {Object.entries(fields).map(([key, config]) => (
                                <div key={key}>
                                    <label className="block text-sm font-medium mb-1">
                                        {config.label}
                                    </label>
                                    {config.type === 'textarea' ? (
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
                                    {loading ? (
                                        <Loader2 className="animate-spin mr-2" />
                                    ) : (
                                        <Save className="w-4 h-4 mr-2" />
                                    )}
                                    Save
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* List of items */}
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
                                    {Object.entries(fields).map(([key, config]) => (
                                        <div key={key}>
                                            <span className="font-medium">{config.label}: </span>
                                            <span>{(item as any)[key]?.toString()}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleEdit(item)}
                                        disabled={loading || !!editingItem}
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete((item as any)._id ?? '')}
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
