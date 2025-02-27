import { AlertDialog } from "@/components/ui/AlertDialog";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { ApiService } from "@/services/api.service";
import { Newsletter } from "@/types/types";
import { useState, useEffect } from "react";

export default function NewsletterAdmin() {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
    const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const columns = [
        { header: 'Title', accessor: 'title' as const },
        {
            header: 'Publish Date',
            accessor: 'publishDate' as const,
            render: (date: Date) => new Date(date).toLocaleDateString()
        },
        {
            header: 'Created',
            accessor: 'createdAt' as const,
            render: (date: Date) => new Date(date).toLocaleDateString()
        }
    ];

    useEffect(() => {
        loadNewsletters();
    }, []);

    const loadNewsletters = async () => {
        const response = await ApiService.get<Newsletter[]>('/newsletter');
        if (response.success && response.data) {
            setNewsletters(response.data);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title'),
            content: formData.get('content'),
            publishDate: formData.get('publishDate')
        };

        const response = selectedNewsletter
            ? await ApiService.put<Newsletter>(`/newsletter/${selectedNewsletter.id}`, data)
            : await ApiService.post<Newsletter>('/newsletter', data);

        if (response.success) {
            setAlert({ type: 'success', message: 'Newsletter saved successfully!' });
            loadNewsletters();
            setIsModalOpen(false);
        } else {
            setAlert({ type: 'error', message: response.error || 'An error occurred' });
        }
    };

    const handleDelete = async (newsletter: Newsletter) => {
        if (confirm('Are you sure you want to delete this newsletter?')) {
            const response = await ApiService.delete<null>(`/newsletter/${newsletter.id}`);
            if (response.success) {
                setAlert({ type: 'success', message: 'Newsletter deleted successfully!' });
                loadNewsletters();
            } else {
                setAlert({ type: 'error', message: response.error || 'An error occurred' });
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Newsletter Management</h1>
                <button
                    onClick={() => {
                        setSelectedNewsletter(null);
                        setIsModalOpen(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Newsletter
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
                data={newsletters}
                columns={columns}
                onEdit={(newsletter) => {
                    setSelectedNewsletter(newsletter);
                    setIsModalOpen(true);
                }}
                onDelete={handleDelete}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedNewsletter ? 'Edit Newsletter' : 'Add Newsletter'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={selectedNewsletter?.title}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea
                            name="content"
                            defaultValue={selectedNewsletter?.content}
                            rows={6}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Publish Date</label>
                        <input
                            type="date"
                            name="publishDate"
                            defaultValue={selectedNewsletter?.publishDate.toString().split('T')[0]}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
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
                            {selectedNewsletter ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}