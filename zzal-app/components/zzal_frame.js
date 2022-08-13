import { NodeNextRequest } from "next/dist/server/base-http/node";
import {useState, useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import { idText } from "typescript";

export function Item({id, keywords, imgUrl}){ 
    const router = useRouter();
    const onClickItem = ((id, keywords, imgUrl) => {
        console.log("click!!");
        console.log(keywords)
        console.group(imgUrl)
        router.push({
            pathname: `/zzal/${id}`,
            query:{
                id: id,
                keywords: keywords,
                imgUrl: imgUrl,
            }
        },
        `/zzal/${id}`);
    });
    const onClickKeyword = ((value) => {
        router.push({
            pathname: "/search",
            query: {search: value},
        });
    });
    return (
        <div className='zzal'>
            <img src={imgUrl} width={"100%"} onClick={() =>onClickItem(id, keywords, imgUrl)}/>
            <div className='keywords'>
                {keywords.map((item) => <button onClick={() => onClickKeyword(item)}> {item} </button>)}
            </div>
            <style jsx>{`
                .zzal{
                    margin: 50px 0px;
                    position: relative;
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
                    cursor: pointer;
                }
                img{
                    height:auto;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}

export default function zzal_frame(){
    const results = [
        {id: 1, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://i.pinimg.com/originals/8e/2d/0a/8e2d0a4b4862b3e6be8223f2361583f5.jpg"},
        {id: 2, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"http://snaptime.edaily.co.kr/wp-content/uploads/2021/07/KakaoTalk_20210721_164505656.jpg"},
        {id: 3, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://i.pinimg.com/originals/63/ce/fe/63cefe1665d246b3e0630304332f6bac.jpg"},
        {id: 4, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://blog.kakaocdn.net/dn/bPbOpx/btrb23ZnKhd/zY3SHNPKR9XhFC4zj9C83K/img.jpg"},
        {id: 5, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://pbs.twimg.com/media/FC3s8NOaIAACtXi.jpg"},
        {id: 6, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://i.pinimg.com/originals/b4/8c/03/b48c033ce77744cc081c8f2556ca362a.jpg"},
        {id: 7, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://i.pinimg.com/originals/98/c8/cd/98c8cdb6cdb0978c4a4ef4bb59b5afb3.jpg"},
        {id: 8, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://mblogthumb-phinf.pstatic.net/MjAyMTAyMjdfMjUw/MDAxNjE0NDA1MTY3NTAx.u6ysHq7AaSVDZuph7rHVQUyl9s1eX9U_tAmylfB6HVcg.BgGifUcHOhYs0aulPEYS18nrBStJWLLGYHIaAyiyjGgg.JPEG.letyourselfglow/IMG_4400.jpg?type=w800"},
        {id: 9, keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"], imgURL:"https://pbs.twimg.com/media/E8mCs2EUYAssvTy.jpg"}];
        
    const imgs = [
            "https://i.pinimg.com/originals/8e/2d/0a/8e2d0a4b4862b3e6be8223f2361583f5.jpg",
            "http://snaptime.edaily.co.kr/wp-content/uploads/2021/07/KakaoTalk_20210721_164505656.jpg",
            "https://i.pinimg.com/originals/63/ce/fe/63cefe1665d246b3e0630304332f6bac.jpg",
            "https://blog.kakaocdn.net/dn/bPbOpx/btrb23ZnKhd/zY3SHNPKR9XhFC4zj9C83K/img.jpg",
            "https://pbs.twimg.com/media/FC3s8NOaIAACtXi.jpg",
            "https://i.pinimg.com/originals/b4/8c/03/b48c033ce77744cc081c8f2556ca362a.jpg",
            "https://i.pinimg.com/originals/98/c8/cd/98c8cdb6cdb0978c4a4ef4bb59b5afb3.jpg",
            "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMjdfMjUw/MDAxNjE0NDA1MTY3NTAx.u6ysHq7AaSVDZuph7rHVQUyl9s1eX9U_tAmylfB6HVcg.BgGifUcHOhYs0aulPEYS18nrBStJWLLGYHIaAyiyjGgg.JPEG.letyourselfglow/IMG_4400.jpg?type=w800",
            "https://pbs.twimg.com/media/E8mCs2EUYAssvTy.jpg"];
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
        }
    },[winWidth])
    useEffect(()=>{
        function handleResize(){
            if(typeof window !== "undefined"){
                setWinWidth(window.innerWidth);
            }
            else{
                setWinWidth(1700);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=> window.removeEventListener("resize",handleResize);
    }, []);
    
    return (
        <div className="zzals">
            {[0, 1, 2, 3].slice(0, verticals).map((idx)=>
                <div className='vertical' key={idx}>
                    { results.filter(function(value, index) {
                        return (index % verticals)===idx?value:null;
                    }).map((item) => <Item id={item.id} keywords={item.keywords} imgUrl={item.imgURL} key={item.id}/>)}
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