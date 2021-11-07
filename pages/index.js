import React from  "react"
import Link from "next/link";
import {useAuth} from "../context/authContext";
export default function Home(){
  const {currentUser}=useAuth();
  return(
    <h1>{JSON.stringify(currentUser)}</h1>
  )
}