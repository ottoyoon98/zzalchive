import {useRouter} from 'next/router';
import Image from 'next/image';
import share from '../../public/images/share.svg';
import like from '../../public/images/like.svg';
import bookmark from '../../public/images/bookmark.svg';
import download from '../../public/images/download.svg';
export default function Detail(){
    const router = useRouter();
    const id = router.query.id;
    const keywords = router.query.keywords || [];
    const imgUrl = router.query.imgUrl || '';
    return (
        <div className='detail'>
            {imgUrl===''? (<h1> 잘못된 접근입니다.</h1>):(
                <div className='wrapper'>
                    <div className='imgWrapper'>
                        <img src={imgUrl} width={"350px"} alt="" />
                    </div>
                    <div className='description'>
                        <h3>이 짤은요~</h3>
                        <div className='keywords'>
                            {keywords.map((item) => <button> {item} </button>)}
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
                        <div>
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
                            <p>저작권</p>
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
                    width: 400px;
                    height: 400px;
                }
                .description{
                    padding: 10px 10px;

                }
                .keywords{
                    width: 100%;
                    margin: 20px 0px 40px 0px;
                    padding: 0 10px 0 10px;
                }
                .keywords > button {
                    display: inline;
                    border: solid 2px pink;
                    border-radius: 15px;
                    padding: 5px 10px;
                    margin: 1px 3px;
                    font-size: 14px;
                    cursor: pointer;
                }
                img{
                    height:auto;
                    cursor: pointer;
                }
                h3{
                    padding: 0 10px;
                    margin: 0px;
                }
                .btn-group button{
                    width: 30%;
                    border: solid 0px skyblue;
                    border-radius: 25px;
                    padding: 10px 20px;
                    margin: 5px 5px;
                    background: skyblue;
                    cursor: pointer;
                }
                .btn-group button:hover{
                    background: lightpink;
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
                .download{
                    width: 100%;
                    height: 50px;
                    margin: 10px 0px;
                    background: #FEF9A7;
                    border: solid 2px orange;
                    border-radius: 20px;
                    cursor: pointer;
                }
                .download:hover{
                    background: orange;
                }
                .download div{
                    display: inline-block;
                    margin-right: 5px;
                }
            `}</style>
        </div>
    );
}