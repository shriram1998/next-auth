import '../styles/globals.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  console.log(pageProps.session);
  return (
    <Provider
      session={pageProps.session}
      options={{
      keepAlive: 0, 
      clientMaxAge: 0,
    }}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
