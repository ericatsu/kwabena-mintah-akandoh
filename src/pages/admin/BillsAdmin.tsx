import React from 'react';
import type { IBill } from '@/types/parliament';
import { GenericManager } from './GenericManager';

export const BillsAdmin: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Parliamentary Bills</h1>

            <GenericManager<IBill>
                title="Bills"
                endpoint="bills"
                emptyItem={{
                    title: '',
                    status: '',
                    stage: '',
                    introduced: new Date(),
                    summary: '',
                    supporters: 0,
                    documents: [],
                    timeline: []
                }}
                fields={{
                    title: { label: 'Title', type: 'input' },
                    status: { label: 'Status', type: 'input' },
                    stage: { label: 'Stage', type: 'input' },
                    introduced: { label: 'Introduced', type: 'datePicker' },
                    summary: { label: 'Summary', type: 'textarea' },
                    supporters: { label: 'Supporters', type: 'input' },
                    documents: { label: 'Documents', type: 'textarea' },
                    timeline: { label: 'Timeline', type: 'textarea' }
                }}
            />
        </div>
    );
};

export default BillsAdmin;
