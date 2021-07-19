import '../styles/globals.scss'
import {SWRConfig} from 'swr';
import fetch from '../lib/fetchJson'

function MyApp({ Component, pageProps }) {
  return(
    <SWRConfig 
      value={{
        fetcher: fetch,
        onError:(err)=>{
          console.log(err)
        },
      }}
      >
        <Component {...pageProps} />
    </SWRConfig>

  );
}

export default MyApp
