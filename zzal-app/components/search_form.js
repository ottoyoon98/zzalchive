import {useRouter} from 'next/router';
import {useState, useEffect} from 'react'
import { WithContext as ReactTags } from 'react-tag-input';


const KeyCodes = {
    comma: 188,
    enter: 13
};
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];



export default function SearchForm({searching_query}){
    const router = useRouter()
    const onSubmit = ((event) => {
        event.preventDefault();
        router.push({
            pathname: "/search",
            query: {search: tags},
        });
    })

    const [tags, setTags] = useState([]);
    const suggestionList = ["컬러", "흑백", "움짤","최고심", "드라마", "영화", "만화", "웹툰"]
    const suggestions = suggestionList.map(country => {
        return {
            id: country,
            text: country
        };
    });
    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };
    const handleAddition = tag => {
        setTags([...tags, tag]);
    };
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setTags(newTags);
    }
    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search" className="sr-only">search</label>
            <div className='search-container'>
                <ReactTags 
                    tags={tags}
                    delimiters={delimiters}
                    suggestions={suggestions}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    inline
                    inputFieldPosition="top"
                    autocomplete
                    classNames={{
                        tagInputField: 'tagSearchField'
                    }}
                />
                

                <button className='searchBtn'>
                    <svg viewBox="0 0 20 20">
                        <path 
                            d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" 
                            transform="translate(-367 -369)" 
                            fill="currentColor">
                        </path>
                    </svg>
                    Search
                </button> 
            </div>
            <style jsx>{`
                label {
                    width:0px;
                    display:none;
                }
                form {
                    height:70px;
                    justify-content:auto;
                }
                .search-container{
                    display:flex;
                    justify-content:center;
                    align-items:start;
                    margin: auto;
                }
                .searchBtn{
                    content: center;
                    justify-content:center;
                    width: 140px;
                    height: 70px;
                    border: solid 0px;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                    background-color:orange;
                    color:white;
                    font-weight: 500;
                    font-size: 18px;
                    cursor: pointer;
                }
                svg{
                    width: 20px;
                    height: 16px;
                }
                input:foucs{
                    outline: none;
                }
                @media screen and (max-width: 600px){
                    .search-container{width: 500px;}
                    .search-Btn{width:100px;}
                }
                @media screen and (min-width: 600px) and (max-width: 720px){
                    .search-container{width: 580px;}
                    .search-Btn{width:120px;}
                }
                @media screen and (min-width: 720px) and (max-width: 1080px){
                    .search-container{width: 700px;}
                    .search-Btn{width:120px;}
                }
                @media screen and (min-width: 1080px){
                    .search-container{width:1000px;}
                    .search-Btn{width:140px;}
                }
            `}</style>
        </form>
    )
}