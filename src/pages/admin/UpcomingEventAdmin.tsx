import { AlertDialog } from "@/components/ui/AlertDialog";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { ApiService } from "@/services/api.service";
import { UpcomingEvent, EventType } from "@/types/types";
import { useState, useEffect } from "react";

export default function UpcomingEventAdmin() {
    const [events, setEvents] = useState<UpcomingEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const columns = [
        { header: 'Title', accessor: 'title' as const },
        {
            header: 'Date',
            accessor: 'date' as const,
            render: (date: Date) => new Date(date).toLocaleDateString()
        },
        { header: 'Location', accessor: 'location' as const },
        { header: 'Type', accessor: 'type' as const }
    ];

    const eventTypes: EventType[] = ['Constituency', 'Ministry', 'Other'];

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const response = await ApiService.get<UpcomingEvent[]>('/upcoming-events');
        if (response.success && response.data) {
            setEvents(response.data);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title'),
            date: formData.get('date'),
            location: formData.get('location'),
            type: formData.get('type')
        };

        const response = selectedEvent
            ? await ApiService.put<UpcomingEvent>(`/upcoming-events/${selectedEvent.id}`, data)
            : await ApiService.post<UpcomingEvent>('/upcoming-events', data);

        if (response.success) {
            setAlert({ type: 'success', message: 'Event saved successfully!' });
            loadEvents();
            setIsModalOpen(false);
        } else {
            setAlert({ type: 'error', message: response.error || 'An error occurred' });
        }
    };

    const handleDelete = async (event: UpcomingEvent) => {
        if (confirm('Are you sure you want to delete this event?')) {
            const response = await ApiService.delete<null>(`/upcoming-events/${event.id}`);
            if (response.success) {
                setAlert({ type: 'success', message: 'Event deleted successfully!' });
                loadEvents();
            } else {
                setAlert({ type: 'error', message: response.error || 'An error occurred' });
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Upcoming Events Management</h1>
                <button
                    onClick={() => {
                        setSelectedEvent(null);
                        setIsModalOpen(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Event
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
                data={events}
                columns={columns}
                onEdit={(event) => {
                    setSelectedEvent(event);
                    setIsModalOpen(true);
                }}
                onDelete={handleDelete}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedEvent ? 'Edit Event' : 'Add Event'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={selectedEvent?.title}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            name="date"
                            defaultValue={selectedEvent?.date.toString().split('T')[0]}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={selectedEvent?.location}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <select
                            name="type"
                            defaultValue={selectedEvent?.type}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        >
                            {eventTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
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
                            {selectedEvent ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}