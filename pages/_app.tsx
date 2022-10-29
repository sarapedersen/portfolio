import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<div className='font-serif'>
    <Component {...pageProps} />
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;613&display=swap" rel="stylesheet"></link>
  </div>)
}

export default MyApp
