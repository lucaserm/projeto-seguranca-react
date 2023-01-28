import { useContext } from 'react';
import { Login } from '../../templates/Login';
import { Index } from '../../templates/Index';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  if (!auth.estudante) {
    return <Index />;
  }

  return children;
};
