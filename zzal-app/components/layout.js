import Navbar from './navbar'
import Footer from './footer'
export default function Layout({children}){
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <style jsx>{`
                :after, :before {
                    box-sizing:border-box;
                    border:0 solid #e5e7eb
                }
            `}</style>
        </>
    )
}