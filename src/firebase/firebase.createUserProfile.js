import { setDoc, doc, writeBatch, collection } from "firebase/firestore";
import { db } from "./firebase.util";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  try {
    const formData = {
      displayName: additionalData.displayName,
      email: userAuth.email,
    };
    await setDoc(doc(db, "users", userAuth.uid), formData);
  } catch (error) {
    console.log("Error creating user: ", error.message);
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);

  const collectionRef = collection(db, collectionKey);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const addDirectoryDocuments = async (collectionKey, objectsToAdd) => {
  const directoryRef = doc(collection(db, collectionKey));
  await setDoc(directoryRef, objectsToAdd);
};
