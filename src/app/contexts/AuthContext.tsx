import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

import Router from 'next/router';

import * as auth from '@/services/database/functions/auth';
import * as firestore from '@/services/database/functions/firestore';

import { useCookies } from '../hooks/useCookie';

import type { User } from '@/types/User';

export interface AuthContextModel {
  user: User | null;
  isAuthenticated: boolean;

  setUser: Dispatch<SetStateAction<User | null>>;

  signIn: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<auth.AuthResponse>;

  signUp: (
    email: string,
    password: string,
    rememberMe?: boolean
  ) => Promise<auth.AuthResponse>;

  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const { setCookie, removeCookie } = useCookies();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const unsubscribeSnapshot = firestore.getUserOnSnapshot(
          authUser.uid,
          setUser
        );

        return unsubscribeSnapshot;
      }
    });

    return unsubscribeAuth;
  }, []);

  async function signIn(
    email: string,
    password: string,
    rememberMe: boolean
  ): Promise<auth.AuthResponse> {
    const result = await auth.signIn(email, password);

    if (!result.success) {
      return result;
    }

    const doc = await firestore.getUser(result.user.uid);

    if (!doc) {
      await auth.signOut();

      return {
        success: false,
        error: 'auth/user-not-found',
      };
    }

    const day = 24 * 60 * 60;

    setCookie('auth.token', doc.id, {
      path: '/',
      maxAge: rememberMe ? 30 * day : 1 * day,
    });

    await Router.push('/dashboard');

    return result;
  }

  async function signUp(
    email: string,
    password: string,
    rememberMe = true
  ): Promise<auth.AuthResponse> {
    const result = await auth.signUp(email, password);

    if (!result.success) {
      return result;
    }

    await firestore.createUser({
      id: result.user.uid,
      role: 'user',
    });

    const day = 24 * 60 * 60;

    setCookie('auth.token', result.user.uid, {
      path: '/',
      maxAge: rememberMe ? 30 * day : 1 * day,
    });

    await Router.push('/dashboard');

    return result;
  }

  async function signOut() {
    await auth.signOut();
    removeCookie('auth.token');
    await Router.push('/auth/login');
  }

  const values: AuthContextModel = {
    user,
    isAuthenticated,
    setUser,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
