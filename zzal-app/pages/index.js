export default function Home(){
    return (
        <div className="Home">
            <h1>Find the zzal</h1>
            <h3> Get your finding zzal by some keywords.</h3>
            <form>
                <label for="search" className="sr-only">search</label>
                <input type="text" id="search" autocomplete="off" name="search" placeholder="Type some keywords for searching zzal.">

                </input>
                <button>
                    <svg viewBox="0 0 20 20">
                        <path 
                            d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" 
                            transform="translate(-367 -369)" 
                            fill="currentColor">
                        </path>
                    </svg>
                    Search
                </button> 
            </form>
            <style jsx>{`
                :after, :before {
                    box-sizing:border-box;
                    border:0 solid #e5e7eb
                }
                .Home{
                    justify-content:center;
                    text-align: center;
                    height: 450px;
                    margin-top: 130px;
                    content-align:
                }
                h1 {
                    margin: 80px 0px 40px 0px;
                    font-size: 50px;
                }
                h3 {
                    font-style: none;
                    font-weight: 600;
                    color: grey;
                    margin: 20px 0px 30px 0px;
                }
                label {
                    width:1px;
                    display:none;
                }
                form {
                    margin-top: 60px;
                    height:70px;
                    justify-content:auto;
                }
                input{
                    width: 660px;
                    height: 100%;
                    border: solid 0px grey;
                    background: #f4f0ec;
                    padding-left: 20px;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    font-size: 18px;
                }
                button{
                    content: center;
                    justify-content:center;
                    width: 140px;
                    height: 100%;
                    border: solid 0px;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                    background-color:orange;
                    color:white;
                    font-weight: 500;
                    font-size: 18px;
                }
                svg{
                    width: 20px;
                    height: 16px;
                }
                input:foucs{
                    outline: none;
                }
            `}</style>
        </div>
    );
}