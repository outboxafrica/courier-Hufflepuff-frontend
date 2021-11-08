 import Head from "next/head";
import Cars from "../components/Cars";
import CarSlider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import main from "../styles/Main.module.css";
import { getSession } from "next-auth/react";
import { server } from "../config/config";

export default function Home() {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState(data);
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
        }
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
        <title>drive your dream</title>
        <meta name="description" content="drive your self" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        {/* <Link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Navbar /> */}
      <div style={{ width: "90%" }}>
        <CarSlider data={data} />
        <div className={main.box}>
          <Sidebar getCar={getCar} />
          <Cars data={cars} />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};