import type { GetServerSidePropsContext } from 'next';

import { getServerSideCookies } from '@/app/hooks/useCookie';

import { admin } from '../database/admin';

import type { User } from '@/types/User';

export const validateUser = async (
  ctx: GetServerSidePropsContext
): Promise<User | null> => {
  const cookies = getServerSideCookies(ctx);
  const token = cookies['auth.token'];

  if (!token) {
    return null;
  }

  const snapshot = await admin.firestore().collection('users').doc(token).get();

  if (!snapshot.exists) {
    return null;
  }

  return { id: snapshot.id, ...snapshot.data() } as User;
};
