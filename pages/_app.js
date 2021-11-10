import Layout from '../components/Layout'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from '../context/contextProducts';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import app from "../config/config"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <script defer src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossOrigin="anonymous"></script>
    </Head>
    <AuthProvider>
      <CartProvider>
      <Layout>
      <ToastContainer />
        <Component {...pageProps} />
       </Layout>
      </CartProvider>
      </AuthProvider>
    </>
    
  )
  
}

export default MyApp
