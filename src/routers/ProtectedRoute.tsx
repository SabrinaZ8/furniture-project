import { useAuth } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>...</div>; 
  }

  return isSignedIn ? <Outlet /> : <Navigate to="/" replace /> ;
};
