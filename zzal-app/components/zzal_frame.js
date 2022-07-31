import { NodeNextRequest } from "next/dist/server/base-http/node";
import {useState, useEffect} from 'react'
export function Item({imgSrc}){
    return (
        <div className='zzal'>
            <img src={imgSrc} width={"100%"}/>
            <div className='keywords'>
                <button> 윤영석</button>
                <button> 과제</button>
                <button> 힘내라</button>
                <button> 화이팅</button>
                <button> 아좌좌</button>
            </div>
            <style jsx>{`
                .zzal{
                    margin: 50px 0px;
                }
                .keywords{
                    width: 100%;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                .keywords > button {
                    display: inline;
                    border: solid 1px pink;
                    border-radius: 15px;
                    padding: 5px 10px;
                    margin: 1px 3px;
                    font-size: 12px;
                }
            `}</style>
        </div>
    )
}

export default function zzal_frame(){
    const urlList = [
        "https://i.pinimg.com/originals/8e/2d/0a/8e2d0a4b4862b3e6be8223f2361583f5.jpg",
        "http://snaptime.edaily.co.kr/wp-content/uploads/2021/07/KakaoTalk_20210721_164505656.jpg",
        "https://i.pinimg.com/originals/63/ce/fe/63cefe1665d246b3e0630304332f6bac.jpg",
        "https://blog.kakaocdn.net/dn/bPbOpx/btrb23ZnKhd/zY3SHNPKR9XhFC4zj9C83K/img.jpg",
        "https://pbs.twimg.com/media/FC3s8NOaIAACtXi.jpg",
        "https://i.pinimg.com/originals/b4/8c/03/b48c033ce77744cc081c8f2556ca362a.jpg",
        "https://i.pinimg.com/originals/98/c8/cd/98c8cdb6cdb0978c4a4ef4bb59b5afb3.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMjdfMjUw/MDAxNjE0NDA1MTY3NTAx.u6ysHq7AaSVDZuph7rHVQUyl9s1eX9U_tAmylfB6HVcg.BgGifUcHOhYs0aulPEYS18nrBStJWLLGYHIaAyiyjGgg.JPEG.letyourselfglow/IMG_4400.jpg?type=w800",
        "https://pbs.twimg.com/media/E8mCs2EUYAssvTy.jpg"];
        
    const idxs = [0, 1, 2, 3];    
    const [verticals, setVerticals] = useState(1);
    const [winWidth, setWinWidth] = useState(undefined);
    useEffect(()=>{
        if(winWidth!=="undefined"){
            if(winWidth < 720){
                setVerticals(1);
            } else if(winWidth < 1080){
                setVerticals(2);
            } else {
                setVerticals(3);
            }
            console.log(verticals);
        }
    },[winWidth])
    useEffect(()=>{
        if(typeof window !== "undefined"){
            function handleResize(){
                setWinWidth(window.innerWidth);
            }
        }
        window.addEventListener("resize",handleResize);
        handleResize();
        return ()=> window.removeEventListener("resize",handleResize);
    }, []);
    return (
        <div className="zzals">
            {idxs.slice(0, verticals).map((idx)=>
                <div className='vertical' key={idx}>
                    {urlList.filter(function(value, index) {
                        return (index % verticals)===idx?value:null;
                    }).map((item) => <Item imgSrc={item} key={item}/>)}
                </div>
            )}
            <style jsx>{`
               .zzals{
                    margin-top: 30px;
                    justify-content:space-between; 
                    vertical-align: top;
                    display:inline-block;
                }
                .vertical{
                    display:inline-block;
                    width:310px;
                    vertical-align: top;
                    margin: 20px;
                }
            `}</style>
        </div>
    )

}