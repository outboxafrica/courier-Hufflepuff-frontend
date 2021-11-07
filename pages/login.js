import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";
import Card from "react-bootstrap/Card";
import Style from "../styles/Home.module.css"

function LogIn() {
  const router = useRouter();
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logIn(data);
      setLoading(false)
      router.push("/adminDashboard");
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };
  return (
    <div className="parent container d-flex justify-content-center align-items-center h-100">
    <Card className={Style.card}>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
        className="form-control"
          value={data.email}
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <br></br>
        <label>Password</label>
        <input
            className="form-control"
          value={data.password}
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        /><br></br>
        <button type="submit" className="btn btn-primary">{loading ? "logging in": "Log in" }</button>
      </form>
      
    </Card>
    </div>
  );
}

export default LogIn;
