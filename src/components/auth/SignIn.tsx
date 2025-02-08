import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your authentication logic here
        // For demo purposes, using simple validation
        if (email === 'admin@example.com' && password === 'admin123') {
            localStorage.setItem('adminAuth', 'true');
            navigate('/admin/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-md p-4">
                <Card>
                    <CardHeader>
                        <div className="">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="max-auto h-12 w-12 object-cover"
                            />
                            <h2 className="mt-4 text-2xl font-bold">Admin Sign In</h2>
                            <p className="mt-2 text-gray-600">Sign in to access the admin dashboard</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};