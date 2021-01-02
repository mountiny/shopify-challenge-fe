import Layout from "../components/Layout";
import '../styles/index.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className="min-h-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
