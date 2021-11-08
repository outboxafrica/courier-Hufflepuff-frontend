import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import app from "../firebaseClient";

function AdminDashboard({ orders }) {
  const { currentUser } = useAuth();
  const router = useRouter();
  console.log(orders);
  useEffect(() => {
    console.log("checking user");
    if (currentUser === null) {
      router.push("/login");
    }
  }, [router, currentUser]);
  return (
    <div>
      <NavBar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Order</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.order}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          );
        }
        )}
        </tbody>
        <style>{`
        .table {
          color:#5C7AEA;
      `}</style>
      </table>
    </div>
  );
}

export default AdminDashboard;

export async function getStaticProps() {
  const res = await fetch("https://courier-hufflepuff-frontend.vercel.app/api/hello");
  const data = await res.json();

  return {
    props: {
      orders: data,
    },
  };
}

