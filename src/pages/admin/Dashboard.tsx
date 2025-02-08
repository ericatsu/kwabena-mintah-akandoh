import { Card, CardContent } from '@/components/ui/card';

export const Dashboard = () => {
    const stats = [
        { label: 'Total Pages', value: '12' },
        { label: 'Published Speeches', value: '45' },
        { label: 'Active Initiatives', value: '8' },
        { label: 'Media Items', value: '124' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <h3 className="text-lg text-gray-600">{stat.label}</h3>
                            <p className="text-3xl font-bold text-emerald-600 mt-2">{stat.value}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Add more dashboard content as needed */}
        </div>
    );
};