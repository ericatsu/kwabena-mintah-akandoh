import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Award, Building, Heart, School, Users } from 'lucide-react';

export const Dashboard = () => {

    const districts = [
        { name: 'Juaboso Central', population: '45,000', projects: 12 },
        { name: 'Bonsu Nkwanta', population: '35,000', projects: 8 },
        { name: 'Benchema', population: '30,000', projects: 10 }
    ];

    const initiatives = [
        {
            title: 'Healthcare Access',
            category: 'Healthcare',
            progress: 75,
            icon: Heart,
            metrics: ['12 New Clinics', '5000+ Patients Served']
        },
        {
            title: 'Education Support',
            category: 'Education',
            progress: 85,
            icon: School,
            metrics: ['20 Schools Supported', '1000+ Scholarships']
        }
    ];

    const getTotalProjects = () => {
        return districts.reduce((acc, district) => acc + district.projects, 0);
    };

    const getActiveInitiatives = () => {
        return initiatives.length;
    };

    const stats = [
        {
            label: 'Total Districts',
            value: districts.length,
            icon: Building,
            color: 'text-blue-600'
        },
        {
            label: 'Total Projects',
            value: getTotalProjects(),
            icon: Award,
            color: 'text-emerald-600'
        },
        {
            label: 'Active Initiatives',
            value: getActiveInitiatives(),
            icon: Heart,
            color: 'text-red-600'
        },
        {
            label: 'Total Population',
            value: '110,000',
            icon: Users,
            color: 'text-purple-600'
        }
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg text-gray-600">{stat.label}</h3>
                                    <p className={`text-3xl font-bold ${stat.color} mt-2`}>
                                        {stat.value}
                                    </p>
                                </div>
                                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8">
                <Tabs defaultValue="districts">
                    <TabsList>
                        <TabsTrigger value="districts">Districts Overview</TabsTrigger>
                        <TabsTrigger value="initiatives">Active Initiatives</TabsTrigger>
                    </TabsList>

                    <TabsContent value="districts" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {districts.map((district, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <h3 className="text-lg font-semibold">{district.name}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <p className="text-gray-600">
                                                Population: {district.population}
                                            </p>
                                            <p className="text-gray-600">
                                                Active Projects: {district.projects}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="initiatives" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {initiatives.map((initiative, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <div className="flex items-center space-x-2">
                                            <initiative.icon className="h-6 w-6 text-emerald-600" />
                                            <h3 className="text-lg font-semibold">{initiative.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-gray-600">Category: {initiative.category}</p>
                                                <p className="text-gray-600">Progress: {initiative.progress}%</p>
                                            </div>
                                            <div className="space-y-1">
                                                {initiative.metrics.map((metric, idx) => (
                                                    <p key={idx} className="text-sm text-gray-500">
                                                        • {metric}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};