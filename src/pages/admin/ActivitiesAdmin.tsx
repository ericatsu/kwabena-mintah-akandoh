import React from 'react';
import { GenericManager } from './GenericManager';
import type { IActivity, IRecentActivity } from '@/types/parliament';

export const ActivitiesAdmin: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Activities Manager</h1>

            <GenericManager<IActivity>
                title="All Activities"
                endpoint="activities"
                emptyItem={{ title: '', count: 0, icon: '', items: [], trend: '' }}
                fields={{
                    title: { label: 'Title', type: 'input' },
                    count: { label: 'Count', type: 'input' },
                    icon: { label: 'Icon', type: 'input' },
                    items: { label: 'Items', type: 'textarea' },
                    trend: { label: 'Trend', type: 'input' }
                }}
            />

            <GenericManager<IRecentActivity>
                title="Recent Activities"
                endpoint="recent-activities"
                emptyItem={{
                    date: new Date(),
                    title: '',
                    type: '',
                    duration: { value: 1, unit: 'hours' }
                }}
                fields={{
                    date: { label: 'Date', type: 'input' },
                    title: { label: 'Title', type: 'input' },
                    type: { label: 'Type', type: 'input' },
                    duration: { label: 'Duration', type: 'input' }
                }}
            />
        </div>
    );
};

export default ActivitiesAdmin;
