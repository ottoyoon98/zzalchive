import Link from "next/link";

export default function footer(){
    return (
        <footer>
            <div className="group_info">
                <div className="wrap_info"><Link href="/"><a>이용약관</a></Link></div>
                <div className="wrap_info"><Link href="/"><a>운영정책</a></Link></div>
                <div className="wrap_info"><Link href="/"><a>공지사항</a></Link></div>
                <div className="wrap_info"><Link href="/"><a>저작권 침해 구제</a></Link></div>
            </div>
            <div className="copyright"><p>© TEAM 윤유선. All rights reserved.</p></div>
            <style jsx>{`
                footer {
                    text-align: left;
                    padding: 40px 60px 30px 30px;
                    background: #dcdcdc;
                }
                .group_info {
                    justify-content: space-between;
                    display: inline;
                    margin-top: 50px;
                }
                .wrap_info {
                    display: inline;
                    margin: 20px 20px;
                }
                a{
                    font-weight: 600;
                }
                p{ 
                    padding-left: 20px;
                    font-weight: 600;
                } 
            `}</style>
        </footer>
    );
}