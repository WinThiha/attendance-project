import Layout from '@/components/Layout'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <AuthProvider>
      <Layout>
    <Component {...pageProps} />
  </Layout>
    </AuthProvider>
  )
}
