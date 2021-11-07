import { addDoc, collection, getFirestore } from "@firebase/firestore";
import app from "../config/config";

export async function addToCartData(cartData) {
  try {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "items"), { ...cartData });
    console.log(docRef.id);
  } catch (error) {
    console.log(error);
  }
}