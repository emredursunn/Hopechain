import { addDoc, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import {db} from "../firebaseConfig.js"
import { Charity } from "../types/Charity.js";
import { User } from "../types/User.ts";

export async function addCharity({publicKey,name,imageUri,description}:Charity) {
  try {
    const docRef = await addDoc(collection(db, "charities"), {
      description,
      imageUri,
      name,
      publicKey,
    });
    console.log("Belge yazıldı, ID: ", docRef.id);
  } catch (e) {
    console.error("Hata oluştu: ", e);
  }
}

export async function getCharityById(documentId:string) {
  const docRef = doc(db, "charities", documentId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Belge verileri:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("Bu ID'ye sahip belge bulunamadı!");
  }
}

export async function getAllCharities(): Promise<Charity[]> {
  const charitiesCollectionRef = collection(db, "charities");
  const charitiesSnapshot = await getDocs(charitiesCollectionRef);
  const charitiesList: Charity[] = charitiesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
  } as Charity));

  return charitiesList;
}

export async function addUser({publicKey} : {publicKey:string}) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      publicKey,
      totalDonation:0
    });
    console.log("Belge yazıldı, ID: ", docRef.id);
  } catch (e) {
    console.error("Hata oluştu: ", e);
  }
}

export const handleUserInFirebase = async (publicKey: string) => {
  const userRef = doc(db, "users", publicKey);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // Create a new user document if it doesn't exist
    await setDoc(userRef, {
      publicKey: publicKey,
      totalDonation: 0,
    });
    console.log("New user added to Firebase");
  }
};

export async function getUserByPublicKey(publicKey: string): Promise<User | null> {
  const docRef = doc(db, 'users', publicKey);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Belge verileri:', docSnap.data());
    return docSnap.data() as User;
  } else {
    console.log('Bu ID\'ye sahip belge bulunamadı!');
    return null;
  }
}

export const updateUserDonation = async (publicKey: any, donationAmount: number) => {
  const userRef = doc(db, "users", publicKey);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const currentDonation = userSnap.data()?.totalDonation || 0;
    await updateDoc(userRef, {
      totalDonation: currentDonation + donationAmount
    });
  } else {
    // If the user document does not exist, handle the error or create the document
    console.error("User document does not exist!");
  }
};