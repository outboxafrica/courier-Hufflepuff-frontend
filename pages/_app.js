import Layout from '../components/Layout'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider } from 'next-auth/react';
import { Link } from '@mui/material';
import head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <head>
    <script defer src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossOrigin="anonymous"></script>
    </head>
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
       </Layout>
    </SessionProvider>
    </>
    
  )
  
}

export default MyApp
