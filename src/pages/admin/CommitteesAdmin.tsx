import React from 'react';
import type { ICommittee } from '@/types/parliament';
import { GenericManager } from './GenericManager';

export const CommitteesAdmin: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Parliamentary Committees</h1>

            <GenericManager<ICommittee>
                title="Committees"
                endpoint="committees"
                emptyItem={{
                    name: '',
                    role: '',
                    meetings: 0,
                    initiatives: 0,
                    impact: '',
                    recentWork: []
                }}
                fields={{
                    name: { label: 'Committee Name', type: 'input' },
                    role: { label: 'Role', type: 'input' },
                    meetings: { label: 'Meetings', type: 'input' },
                    initiatives: { label: 'Initiatives', type: 'input' },
                    impact: { label: 'Impact', type: 'textarea' },
                    recentWork: { label: 'Recent Work', type: 'textarea' }
                }}
            />
        </div>
    );
};

export default CommitteesAdmin;
