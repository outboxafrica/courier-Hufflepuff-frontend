// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from "next/head"
// own css files here
// import "../css/customcss.css";

import {AuthProvider} from '../context/authContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
  <Head>
  <script defer src="https://kit.fontawesome.com/fa50b386d3.js" crossOrigin="anonymous"></script>
  </Head>
  <AuthProvider>
    <Component{...pageProps}/>
  </AuthProvider>
  </>
  );
}


export default MyApp;
  
