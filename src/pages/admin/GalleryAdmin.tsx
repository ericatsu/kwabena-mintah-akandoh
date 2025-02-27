import { AlertDialog } from '@/components/ui/AlertDialog';
import { DataTable } from '@/components/ui/DataTable';
import { Modal } from '@/components/ui/Modal';
import { ApiService } from '@/services/api.service';
import { GalleryItem } from '@/types/types';
import { useState, useEffect } from 'react';

export default function GalleryAdmin() {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const columns = [
        { header: 'Caption', accessor: 'caption' as const },
        { header: 'Category', accessor: 'category' as const },
        {
            header: 'Images',
            accessor: 'url' as const,
            render: (urls: string[]) => `${urls.length} images`
        },
        {
            header: 'Created',
            accessor: 'createdAt' as const,
            render: (date: Date) => new Date(date).toLocaleDateString()
        }
    ];

    useEffect(() => {
        loadGalleryItems();
    }, []);

    const loadGalleryItems = async () => {
        const response = await ApiService.get<GalleryItem[]>('/gallery');
        if (response.success && response.data) {
            setItems(response.data);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            caption: formData.get('caption'),
            category: formData.get('category'),
            url: formData.get('url')?.toString().split(','),
            link: formData.get('link')
        };

        const response = selectedItem
            ? await ApiService.put<GalleryItem>(`/gallery/${selectedItem.id}`, data)
            : await ApiService.post<GalleryItem>('/gallery', data);

        if (response.success) {
            setAlert({ type: 'success', message: 'Gallery item saved successfully!' });
            loadGalleryItems();
            setIsModalOpen(false);
        } else {
            setAlert({ type: 'error', message: response.error || 'An error occurred' });
        }
    };

    const handleDelete = async (item: GalleryItem) => {
        if (confirm('Are you sure you want to delete this item?')) {
            const response = await ApiService.delete<null>(`/gallery/${item.id}`);
            if (response.success) {
                setAlert({ type: 'success', message: 'Gallery item deleted successfully!' });
                loadGalleryItems();
            } else {
                setAlert({ type: 'error', message: response.error || 'An error occurred' });
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gallery Management</h1>
                <button
                    onClick={() => {
                        setSelectedItem(null);
                        setIsModalOpen(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Item
                </button>
            </div>

            {alert && (
                <AlertDialog
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}

            <DataTable
                data={items}
                columns={columns}
                onEdit={(item) => {
                    setSelectedItem(item);
                    setIsModalOpen(true);
                }}
                onDelete={handleDelete}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedItem ? 'Edit Gallery Item' : 'Add Gallery Item'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Caption</label>
                        <input
                            type="text"
                            name="caption"
                            defaultValue={selectedItem?.caption}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            defaultValue={selectedItem?.category}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">URLs (comma-separated)</label>
                        <input
                            type="text"
                            name="url"
                            defaultValue={selectedItem?.url.join(',')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Link (optional)</label>
                        <input
                            type="text"
                            name="link"
                            defaultValue={selectedItem?.link}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            {selectedItem ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}