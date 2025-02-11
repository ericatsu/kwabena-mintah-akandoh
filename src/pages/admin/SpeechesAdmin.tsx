import React from 'react';
import type { ISpeech } from '@/types/parliament';
import { GenericManager } from './GenericManager';

export const SpeechesAdmin: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Parliamentary Speeches</h1>

            <GenericManager<ISpeech>
                title="Speeches"
                endpoint="speeches"
                emptyItem={{
                    date: new Date(),
                    title: '',
                    topic: '',
                    duration: { value: 30, unit: 'minutes' },
                    engagement: 0,
                    videoUrl: '',
                    fullSpeech: '',
                    impact: ''
                }}
                fields={{
                    date: { label: 'Date', type: 'datePicker' },
                    title: { label: 'Title', type: 'input' },
                    topic: { label: 'Topic', type: 'input' },
                    duration: { label: 'Duration', type: 'input' },
                    engagement: { label: 'Engagement', type: 'input' },
                    videoUrl: { label: 'Video URL', type: 'input' },
                    fullSpeech: { label: 'Full Speech', type: 'textarea' },
                    impact: { label: 'Impact', type: 'textarea' }
                }}
            />
        </div>
    );
};

export default SpeechesAdmin;
