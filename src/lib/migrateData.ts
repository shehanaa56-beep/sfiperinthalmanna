import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { donors } from '../data/donors';

export const migrateDonorsToFirestore = async () => {
  try {
    const donorsCollection = collection(db, 'donors');

    for (const donor of donors) {
      // Convert id from number to string and remove it from the data
      const { id, ...donorData } = donor;
      await addDoc(donorsCollection, donorData);
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error migrating data:', error);
    throw error;
  }
};
