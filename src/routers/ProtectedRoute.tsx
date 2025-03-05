import { RedirectToSignIn, useAuth} from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';


export const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>...</div>; 
  }

  return isSignedIn ? <Outlet /> : <RedirectToSignIn /> ;
};
