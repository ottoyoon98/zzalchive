import Link from 'next/link';
export default function Navbar(){
    return (
        <nav>
            <div>
                <Link href="/">
                    <a id="logo">ZZalchive</a>
                </Link>
            </div>
            <ul>
                <li> <Link href="/"><a>Home</a></Link></li>
                <li> <Link href="/explore"><a>Explore</a></Link></li>
                <li> <Link href="/upload"><a>Upload</a></Link></li>
            </ul>
            <style jsx>{`
                nav{
                    justify-content:space-between;
                    display:flex;
                    margin-bottom: 30px;
                }
                nav > div {
                    margin: 20px 40px;
                }
                ul {
                    margin: 40px 20px;
                    list-style-type: none;
                }
                li {
                    float: left;
                    margin-right: 40px;
                    display: inline-block;
                }
                a{
                    font-size: 20px;
                    font-weight: 500;
                    
                }
                a:hover{
                    color: orange;
                }
                #logo
                {
                    font: Segoe UI;
                    font-size: 50px;
                    color:orange;
                    font-weight: 500;

                }
            `}</style>
            
        </nav>
    )
}