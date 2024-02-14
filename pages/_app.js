import Layout from '../components/layout/Layout';
import '../style/global.css'

function MyApp({ Component, pageProps }) {
  console.log("_app.js");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
