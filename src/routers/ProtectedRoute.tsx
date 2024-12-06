import { useAuth } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  // Verifica se o estado de autenticação foi carregado
  if (!isLoaded) {
    return <div>Carregando...</div>;  // Pode exibir um loading enquanto o estado não é definido
  }

  console.log('isSignedIn:', isSignedIn);

  return isSignedIn ? <Outlet /> : <Navigate to="/" replace />;
};
