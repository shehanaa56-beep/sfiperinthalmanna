import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase.ts';
import { donors } from '../data/donors.ts';

export const migrateDonorsToFirestore = async () => {
  try {
    const donorsCollection = collection(db, 'donors');
    let addedCount = 0;
    let skippedCount = 0;

    for (const donor of donors) {
      // Check if donor already exists (by name and phone)
      const q = query(
        donorsCollection,
        where('name', '==', donor.name),
        where('phone', '==', donor.phone)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Donor doesn't exist, add it
        const { id, ...donorData } = donor;
        await addDoc(donorsCollection, donorData);
        addedCount++;
      } else {
        // Donor already exists, skip
        skippedCount++;
      }
    }

    console.log(`Migration completed! Added: ${addedCount}, Skipped (duplicates): ${skippedCount}`);
  } catch (error) {
    console.error('Error migrating data:', error);
    throw error;
  }
};
