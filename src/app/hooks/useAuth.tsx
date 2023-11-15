import { useContext } from 'react';

import { AuthContextModel, AuthContext } from '../contexts/AuthContext';

export const useAuth = (): AuthContextModel => {
  return useContext(AuthContext);
};
