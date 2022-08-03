import {useRouter} from 'next/router';
import Image from 'next/image';
import share from '../../public/images/share.svg';
import like from '../../public/images/like.svg';
import bookmark from '../../public/images/bookmark.svg';
import download from '../../public/images/download.svg';
export default function Detail({id, keywords, imgUrl}){
    const router = useRouter();
    return (
        <div className='detail'>
            {imgUrl===''? (<h1> 잘못된 접근입니다.</h1>):(
                <div className='wrapper'>
                    <div className='imgWrapper'>
                        <img src={imgUrl} width={"90%"} alt="" />
                    </div>
                    <div className='description'>
                        <h3>이 짤은요~</h3>
                        <div className='keywords'>
                            {keywords.map((value, index) => {
                                console.log(index)
                                return <button className='keyword'>{value}</button>
                            })}
                        </div>
                        <div className='btn-group'>
                            <button> 
                                <div>
                                    <Image 
                                        src={like}
                                        alt="thumbs-up image"
                                        width={14}
                                        height={14}
                                        layout={"fixed"}
                                    />
                                </div>
                                좋아요 
                            </button>
                            <button> 
                                <div>
                                    <Image 
                                        src={bookmark}
                                        alt="thumbs-up image"
                                        width={14}
                                        height={14}
                                        layout={"fixed"}
                                    />
                                </div>
                                책갈피 
                            </button>
                            <button> 
                                <div>
                                    <Image 
                                        src={share}
                                        alt="thumbs-up image"
                                        width={14}
                                        height={14}
                                        layout={"fixed"}
                                    />
                                </div>
                                공유하기 
                            </button>
                        </div>
                        <div className='download-wrapper'>
                            <button className='download'>
                                <div>
                                    <Image 
                                        src={download}
                                        alt="thumbs-up image"
                                        width={14}
                                        height={14}
                                        layout={"fixed"}
                                    />
                                </div>
                                다운로드 
                            </button>
                        </div>
                        <div>
                            <p>※ 저작권 보호를 받는 이미지일 수 있습니다. </p>
                        </div>
                    </div>
                </div>)
            }
            <style jsx>{`
                .detail{
                    height: 85vh;
                    width: auto;
                    justify-content: center;
                }
                .detail > h1{
                    text-align: center;
                    margin: 200px 200px;
                }
                .detail div{
                    justify-content: center;
                }
                .wrapper{
                    width: 900px;
                    margin: 100px auto;
                    justify-content: flex-start;
                    display:flex;
                }
                .imgWrapper{
                    width: 50%;
                    height: 400px;
                }
                .description{
                    width: 50%;
                    padding: 10px 10px;

                }
                .keywords{
                    width: 100%;
                    margin: 20px 0px 40px 0px;
                    justify-content: space-between;
                    display:flex;
                }
                .empty{
                    display: inline-flex;
                    width: 10px;
                }
                .keyword {
                    display: inline-flex;
                    border: solid 2px pink;
                    border-radius: 15px;
                    padding: 5px 10px;
                    margin: 3px auto;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                }
                .keyword:hover{
                    background: pink;
                    font-weight: 600;
                }
                img{
                    height:auto;
                    cursor: pointer;
                }
                h3{
                    padding: 0 10px;
                    margin: 0px;
                }
                .btn-group{
                    justify-content: space-between;
                    display: flex;
                }
                .btn-group button{
                    width: 30%;
                    border: solid 2px skyblue;
                    border-radius: 25px;
                    margin: auto;
                    padding: 10px 20px;
                    cursor: pointer;
                }
                .btn-group button:hover{
                    background: #CCCCCC;
                    color: black;

                }
                .btn-group button:active{
                    background: lightpink;
                }
                .like{
                    background-image:url({like});
                    background-size: cover;
                    background-position: center;
                    width: 15px;
                    height: 15px;
                }
                
                .download-wrapper{
                    padding: 0 0px;
                    display: flex;
                }
                .download{
                    width: 98%;
                    height: 50px;
                    margin: 10px 0px;
                    background: #FFFDD0;
                    border: solid 2px orange;
                    border-radius: 20px;
                    cursor: pointer;
                }
                .download:hover{
                    background: #FCF4A3;
                }
                
                .download div{
                    display: inline-block;
                    margin-right: 5px;
                }
                @media screen and (max-width: 600px){
                    .wrapper{width: 500px;}
                }
                @media screen and (min-width: 600px) and (max-width: 1080px){
                    .wrapper{width: 700px;}
                }
                @media screen and (min-width: 1080px){
                    .wrapper{width: 900px;}
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps(context){
    const id = context.params.id;
    const imgs = ["",
            "https://i.pinimg.com/originals/8e/2d/0a/8e2d0a4b4862b3e6be8223f2361583f5.jpg",
            "http://snaptime.edaily.co.kr/wp-content/uploads/2021/07/KakaoTalk_20210721_164505656.jpg",
            "https://i.pinimg.com/originals/63/ce/fe/63cefe1665d246b3e0630304332f6bac.jpg",
            "https://blog.kakaocdn.net/dn/bPbOpx/btrb23ZnKhd/zY3SHNPKR9XhFC4zj9C83K/img.jpg",
            "https://pbs.twimg.com/media/FC3s8NOaIAACtXi.jpg",
            "https://i.pinimg.com/originals/b4/8c/03/b48c033ce77744cc081c8f2556ca362a.jpg",
            "https://i.pinimg.com/originals/98/c8/cd/98c8cdb6cdb0978c4a4ef4bb59b5afb3.jpg",
            "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMjdfMjUw/MDAxNjE0NDA1MTY3NTAx.u6ysHq7AaSVDZuph7rHVQUyl9s1eX9U_tAmylfB6HVcg.BgGifUcHOhYs0aulPEYS18nrBStJWLLGYHIaAyiyjGgg.JPEG.letyourselfglow/IMG_4400.jpg?type=w800",
            "https://pbs.twimg.com/media/E8mCs2EUYAssvTy.jpg"]
    console.log(id);
    // api fetch 추가할 부분.
    return {
        props: {
            id: id,
            keywords: ["윤영석","과제","힘내라","화이팅","아좌좌"],
            imgUrl: imgs[id],
        },
    }
}