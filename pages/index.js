import Head from "next/head";
import Cars from "../components/Cars";
import CarSlider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import main from "../styles/Main.module.css";
import { getSession } from "next-auth/react";
import { server } from "../config/config";

export default function Home({ data2 }) {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState(data);
  console.log(data2);
  //  const session = getSession(context);
  const router = useRouter();
  const getCar = async (value) => {
    const res = await fetch(server);
    const { data } = await res.json();

    const filteredCategory = data.filter((item) =>
      item.category.toLowerCase().includes(value.toLowerCase())
    );

    // console.log(filteredCategory);
    return setCars(value === "" ? data : filteredCategory);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(server, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const { data } = await res.json();
      setData(data);
      setCars(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>EDUMART</title>
        <meta name="description" content="drive your self" />
      </Head>

      <div style={{ width: "90%" }}>
        <CarSlider data={data2} />
        <div className={main.box}>
          <Sidebar data={getCar} />
          <Cars data={data2} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  // const session = await getSession(context);
  const res = await fetch("https://fakestoreapi.com/products");
  const data2 = await res.json();
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      // session,
      data2,
    },
  };
};
