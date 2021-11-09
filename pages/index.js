 import Head from "next/head";
import Cars from "../components/Cars";
import CarSlider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import main from "../styles/Main.module.css";
import { getSession } from "next-auth/react";
import { server } from "../config/config";
// import { CartProvider } from "../context/contextProducts";

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
      const res = await fetch(server);
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
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
        {/* <Link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
              </Head>
      {/* <Navbar /> */}
      <div style={{ width: "90%" }}>
        <CarSlider data={data2} />
        <div className={main.box}>
          <Sidebar data={getCar} />
          <Cars data={data2} />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export const getServerSideProps = async (context) => {
  // const session = await getSession(context);
  const res = await fetch("https://fakestoreapi.com/products");
  const  data2  = await res.json();
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