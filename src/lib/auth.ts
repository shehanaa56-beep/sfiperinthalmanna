import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  AuthError
} from 'firebase/auth';
import { auth } from './firebase';

// Admin credentials (in production, this should be handled securely)
const ADMIN_EMAIL = 'sfiperinthalmanna@gmail.com';
const ADMIN_PASSWORD = 'sfisfi'; // This should be changed in production

// Sign in admin
export const signInAdmin = async (email: string, password: string) => {
  try {
    // For demo purposes, only allow the predefined admin account
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      throw new Error('Invalid admin credentials');
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in admin:', error);
    throw error;
  }
};

// Sign out admin
export const signOutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out admin:', error);
    throw error;
  }
};

// Listen to auth state changes
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Check if user is admin
export const isAdmin = (user: User | null): boolean => {
  return user?.email === ADMIN_EMAIL;
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
