import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";

function AdminDashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>marc04@gmail.com</td>
            <td>Mercedes C-class</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Zoey</td>
            <td>zoeyk@gmail.com</td>
            <td>Mercedes A-class</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Larry </td>
            <td>larry02@gmail.com</td>
            <td>Mercedes C class</td>
          </tr>
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
