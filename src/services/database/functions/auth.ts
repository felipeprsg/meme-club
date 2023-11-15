import { auth } from '..';

import * as firebaseAuth from 'firebase/auth';

import { FirebaseError } from 'firebase/app';

type AuthSuccess = {
  success: true;
  user: firebaseAuth.User;
};

type AuthFailure = {
  success: false;
  error: string | null;
};

export type AuthResponse = AuthSuccess | AuthFailure;

export const signIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const userCredential = await firebaseAuth.signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { success: true, user: userCredential.user };
  } catch (err) {
    if (err instanceof FirebaseError) {
      console.error(err.code);
      return { success: false, error: err.code };
    }

    return { success: false, error: null };
  }
};

export const signInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    const googleProvider = new firebaseAuth.GoogleAuthProvider();

    const result = await firebaseAuth.signInWithPopup(auth, googleProvider);

    return {
      success: true,
      user: result.user,
    };
  } catch (err) {
    if (err instanceof FirebaseError) {
      return { success: false, error: err.code };
    }

    return { success: false, error: null };
  }
};

export const signUp = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return { success: true, user: userCredential.user };
  } catch (err) {
    if (err instanceof FirebaseError) {
      console.error(err.code);
      return { success: false, error: err.code };
    }

    return { success: false, error: null };
  }
};

export const signOut = async (): Promise<void> => {
  await firebaseAuth.signOut(auth);
};

export const onAuthStateChanged = (
  func: (user: firebaseAuth.User | null) => void
): firebaseAuth.Unsubscribe => {
  return auth.onAuthStateChanged(func);
};
