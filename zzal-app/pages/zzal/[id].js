import {useRouter} from 'next/router';

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
                        <img src={imgUrl} width={"300px"} alt="" />
                    </div>
                    <div className='description'>
                        <div className='keywords'>
                            {keywords.map((item) => <button> {item} </button>)}
                        </div>
                    </div>
                </div>)
            }
            <style jsx>{`
                .detail{
                    height: 85vh;
                    justify-content: center;
                }
                .detail > h1{
                    text-align: center;
                    margin: 200px 200px;
                }
                .wrapper{
                    width: 700px;
                    margin: 100px 100px;
                    justify-content: flex-start;
                    display:flex;
                }
                .imgWrapper{
                    width: 300px;
                    height: 300px;
                }
                .description{
                    padding: 10px 10px;
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
    );
}