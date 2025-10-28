import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db, auth } from './firebase';
export interface Donor {
  id: string;
  name: string;
  phone: string;
  bloodGroup: string;
}

const DONORS_COLLECTION = 'donors';

// Convert Firestore document to Donor type
const docToDonor = (doc: DocumentData): Donor => ({
  id: doc.id,
  name: doc.name,
  phone: doc.phone,
  bloodGroup: doc.bloodGroup,
});

// Get all donors
export const getAllDonors = async (): Promise<Donor[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, DONORS_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      phone: doc.data().phone,
      bloodGroup: doc.data().bloodGroup
    } as Donor));
  } catch (error) {
    console.error('Error getting donors:', error);
    throw error;
  }
};

// Get donors by blood group
export const getDonorsByBloodGroup = async (bloodGroup: string): Promise<Donor[]> => {
  try {
    const q = query(
      collection(db, DONORS_COLLECTION),
      where('bloodGroup', '==', bloodGroup)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      phone: doc.data().phone,
      bloodGroup: doc.data().bloodGroup
    } as Donor));
  } catch (error) {
    console.error('Error getting donors by blood group:', error);
    throw error;
  }
};

// Search donors by name or phone
export const searchDonors = async (searchTerm: string): Promise<Donor[]> => {
  try {
    const donors = await getAllDonors();
    const lowerSearchTerm = searchTerm.toLowerCase();
    return donors.filter(donor =>
      donor.name.toLowerCase().includes(lowerSearchTerm) ||
      donor.phone.includes(searchTerm)
    );
  } catch (error) {
    console.error('Error searching donors:', error);
    throw error;
  }
};

// Add a new donor
export const addDonor = async (donorData: Omit<Donor, 'id'>): Promise<string> => {
  try {
    // Ensure the user is authenticated before adding
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User must be authenticated to add donors');
    }

    const docRef = await addDoc(collection(db, DONORS_COLLECTION), {
      ...donorData,
      createdAt: new Date(),
      createdBy: user.uid
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding donor:', error);
    throw error;
  }
};

// Update a donor
export const updateDonor = async (id: string, donorData: Partial<Omit<Donor, 'id'>>): Promise<void> => {
  try {
    const donorRef = doc(db, DONORS_COLLECTION, id);
    await updateDoc(donorRef, donorData);
  } catch (error) {
    console.error('Error updating donor:', error);
    throw error;
  }
};

// Delete a donor
export const deleteDonor = async (id: string): Promise<void> => {
  try {
    const donorRef = doc(db, DONORS_COLLECTION, id);
    await deleteDoc(donorRef);
  } catch (error) {
    console.error('Error deleting donor:', error);
    throw error;
  }
};

// Get donor statistics
export const getDonorStats = async () => {
  try {
    const donors = await getAllDonors();
    const stats = {
      total: donors.length,
      byBloodGroup: {} as Record<string, number>
    };

    donors.forEach(donor => {
      stats.byBloodGroup[donor.bloodGroup] = (stats.byBloodGroup[donor.bloodGroup] || 0) + 1;
    });

    return stats;
  } catch (error) {
    console.error('Error getting donor stats:', error);
    throw error;
  }
};

// Delete all donors
export const deleteAllDonors = async (): Promise<void> => {
  try {
    const donors = await getAllDonors();
    const deletePromises = donors.map(donor => deleteDoc(doc(db, DONORS_COLLECTION, donor.id)));
    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error deleting all donors:', error);
    throw error;
  }
};
