import SearchForm from '../components/search_form'
export default function Home(){
    return (
        <div className="Home">
            <h1>Find the zzal</h1>
            <h3> Get your finding zzal by some keywords.</h3>
            <SearchForm searching_query={""}/>
            <style jsx>{`
                .Home{
                    justify-content:center;
                    text-align: center;
                    height: 75vh;
                    margin-top: 130px;
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
            `}</style>
        </div>
    );
}