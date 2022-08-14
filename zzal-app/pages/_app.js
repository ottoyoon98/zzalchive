import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/reactTags.css'
export default function zzalApp({Component, pageProps}){
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}