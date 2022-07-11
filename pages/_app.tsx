import '../styles/globals.css'
import AuthProvider from '../AppContext'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>

    <Component {...pageProps} />
  </AuthProvider>

}

export default MyApp
