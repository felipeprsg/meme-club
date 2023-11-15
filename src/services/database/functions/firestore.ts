import { db } from '..';

import * as firestore from 'firebase/firestore';

import type { User } from '@/types/User';

const collections = {
  users: 'users',
} as const;

// CREATE
export const createDocument = async (
  col: string,
  id: string,
  data: Record<string, unknown>
): Promise<void> => {
  const ref = firestore.doc(db, col, id);
  await firestore.setDoc(ref, data);
};

export const createUser = async (user: User): Promise<void> => {
  const { id, ...data } = user;
  await createDocument(collections.users, id, data);
};

// READ
export const getDocument = async <T>(
  col: string,
  id: string
): Promise<T | null> => {
  const ref = firestore.doc(db, col, id);
  const snapshot = await firestore.getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as T;
};

export const getDocumentsWhere = async <T>(
  field: string,
  opStr: firestore.WhereFilterOp,
  value: unknown,
  path: string,
  ...pathSegments: string[]
): Promise<T[]> => {
  const query = firestore.query(
    firestore.collection(db, path, ...pathSegments),
    firestore.where(field, opStr, value)
  );

  const snapshot = await firestore.getDocs(query);

  if (snapshot.empty) {
    return [];
  }

  const docs: T[] = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as T)
  );

  return docs;
};

export const getDocumentOnSnapshot = (
  col: string,
  id: string,
  callback: (snapshot: firestore.DocumentSnapshot) => unknown
): firestore.Unsubscribe => {
  const ref = firestore.doc(db, col, id);
  return firestore.onSnapshot(ref, callback);
};

export const getUser = async (userId: string): Promise<User | null> => {
  return await getDocument<User>(collections.users, userId);
};

export const getUserOnSnapshot = (
  userId: string,
  callback: (user: User) => void
): firestore.Unsubscribe => {
  return getDocumentOnSnapshot(collections.users, userId, (snapshot) =>
    callback({ id: snapshot.id, ...snapshot.data() } as User)
  );
};

// UPDATE
export const updateDocument = async (
  col: string,
  id: string,
  data: Record<string, any>
) => {
  const ref = firestore.doc(db, col, id);
  return await firestore.updateDoc(ref, data);
};

export const updateUser = async (
  id: string,
  user: Partial<User>
): Promise<void> => {
  return await updateDocument(collections.users, id, user);
};

// DELETE
export const deleteDocument = async (
  col: string,
  id: string
): Promise<void> => {
  const ref = firestore.doc(db, col, id);
  await firestore.deleteDoc(ref);
};

export const deleteUser = async (userId: string) => {
  return await deleteDocument(collections.users, userId);
};
