import Layout from '../components/Layout'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from "../context/contextProducts";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CartProvider>
        <ToastContainer />
      <Layout>
        <Component {...pageProps} />
       </Layout>
      </CartProvider>
    </SessionProvider>
    
    
  )
  
}

export default MyApp
