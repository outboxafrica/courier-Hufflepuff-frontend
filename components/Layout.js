import React from "react";
import Navbar from "./Navbar";
import style from "../styles/Home.module.css";
import Footer from "./Footer";
import Head from "next/head";
function Layout({ children }) {
  return (
    
    <div>
      <Head>
      <title>drive your dream</title>
        <meta name="description" content="drive your self" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossOrigin=""/>
        
      </Head>
       <Navbar />

      <main className={style.foot}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
