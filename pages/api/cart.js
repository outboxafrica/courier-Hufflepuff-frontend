import { app } from "../../config/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
    const { data, session } = req.body;
    const { name, email } = session.user;

    const order = {data, name, email};
  try {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "test_db"), order);
    res.status(200).json({id: docRef.id});
  } catch (error) {
    console.log(error);
  }
}