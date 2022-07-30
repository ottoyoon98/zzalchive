export default function Home(){
    return (
        <body>
            <h1>Find the zzal</h1>
            <p> Get your finding zzal by some keywords.</p>
            <form>
                <label for="search" className="sr-only">search</label>
                <input type="text" id="search" autocomplete="off" name="search" placeholder="type Some keywords for searching zzal.">

                </input>
                <button>
                    Search
                </button>
            </form>
            <style jsx>{`
                body{
                    justify-content:center;
                    text-align: center;
                }
            `}</style>
        </body>
    );
}