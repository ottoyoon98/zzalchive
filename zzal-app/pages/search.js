import Zzals from '../components/zzal_frame'
import SearchForm from '../components/search_form'
import {useRouter} from 'next/router'

export default function search(){
    const router = useRouter();
    return (
        <div className='search-page'>
            <SearchForm searching_query={router.query.search}/>
            <Zzals verticals={2}/>
            <style jsx>{`
                .search-page{
                    justify-content:center;
                    text-align: center;
                    min-height: 75vh;
                    margin-top: 130px;
                }
            `}</style>
        </div>
    );
}
/*
export async function getSererSideProps(context){
    //const {results} = await(await fetch(`/api/movies`)).json();
    return {
        props: {
            context,
        },
    }
}*/