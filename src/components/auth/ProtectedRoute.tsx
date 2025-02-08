import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />;
    }

    return children;
};