// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDocs, collection, getFirestore } from "firebase/firestore";
import app from "../../firebaseClient";

export default async function handler(req, res) {
  const db = getFirestore();
  const orders = [];
  const orderData = await getDocs(collection(db, "test_db"));
  orderData.forEach((doc) => {
    return orders.push({ ...doc.data(), id: doc.id })
  })
  
  res.send(orders);

}
