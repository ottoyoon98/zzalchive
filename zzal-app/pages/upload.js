import {useState, useRef} from "react";
import Image from "next/image";
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13
};
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];


export default function upload(){
    const pub = process.env.PUBLIC_URL || "";
    const [selectedImage, setSelectedImage] = useState();
    const imageName = useRef("선택된 파일 없음");
    const genreList = [["만화","cartoon"], ["웹툰","webtoon"], ["그림","illust"],["예능","entertainment"], ["드라마","drama"],["영화","movie"]];
    const [selectedColor, setSelectedColor] = useState(-1);
    const [selectedGenre, setSelectedGenre] = useState(-1);
    const suggestions = {};
      
    const onChangeCaptureHandler = (e) => {
        if (e.target.files && e.target.files.length > 0){
            e.target.innerHTML = e.target.files[0].name;
            setSelectedImage(e.target.files[0]);
            imageName.current=e.target.files[0].name;
        }
    };
    const onClickColor = (e) => {
        if ("color" === e.target.id){
            setSelectedColor(0);
        } else if("grayscale" === e.target.id){
            setSelectedColor(1);
        }
    };
    const onClickGenre = (e) => {
        genreList.forEach((item, index) => {
            if (item[1] === e.target.id){
                setSelectedGenre(index);
            }
        })
    };
    const [tags, setTags] = useState([]);
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
        <div className="upload">
            

            <div className="upload-wrapper">
                <div className='imgWrapper'>
                    {   selectedImage ? (
                            selectedImage &&
                            <img 
                                id="preview" 
                                src={URL.createObjectURL(selectedImage)}
                                width={"100%"} 
                                alt="" 
                            /> ) : (<img src={pub + '/images/missing.png'} width={"100%"}/>)
                    }
                </div>
                <form>
                    <h3>업로드할 짤을 선택해 주세요.</h3>
                    <div className="uploader-container">
                        <input type="file" id="uploader" name="upfile[]" onChange={onChangeCaptureHandler} multiple/>
                        <label htmlFor="uploader" className="btn fileBtn">파일 선택</label>
                        <span className="fileName" >{imageName.current}</span>
                    </div>

                    {selectedImage ? (
                        <div className="color-container">
                            <h3>색감은 어떤지 선택해 주세요.</h3>
                            <div className="color-radio-container">
                                <div><input type="radio" name="zzal_color" className="radio" id="color" value="컬러"  onClick={onClickColor}/> <label className={"label" + (selectedColor===0?" selected":"")} htmlFor="color">컬러</label></div>
                                <div><input type="radio" name="zzal_color" className="radio" id="grayscale" value="흑백"  onClick={onClickColor}/> <label className={"label" + (selectedColor===1?" selected":"")} htmlFor="grayscale">흑백</label></div>
                            </div>
                        </div>
                    ) : ("")}
                    {selectedColor!==-1 ? (
                        <div className="genre-container">
                            <h3>어울리는 장르를 골라주세요.</h3>
                            <div className="genre-radio-container">
                                {genreList.map((item, index) => 
                                    <div key={item[0]}>
                                        <input type="radio" name="zzal_genre" className="radio" id={item[1]} value={item[0]} onClick={onClickGenre}/> 
                                        <label className={"label" + (index===selectedGenre?" selected":"")} htmlFor={item[1]}>{item[0]}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    ):("")}
                   
                    {selectedGenre!==-1 ? (
                        <div className="keyword-container">
                        <h3>키워드로 짤을 설명해 주세요</h3>

                        <ReactTags 
                            tags={tags}
                            delimiters={delimiters}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            handleTagClick={handleTagClick}
                            inputFieldPosition="bottom"
                            autocomplete
                            inline
                        />
                    </div>
                    ):("")}
                    {tags.length > 3 ? (
                        <input className="submitBtn" type="submit" formMethod="POST" formAction="/api/upload" value="업로드하기!" />
                    ) : ("")}
                    
                </form>
            </div>
            <style jsx>{`
                .upload{
                    height:max(85vh, 700px);
                }
                h3{
                    margin: 30px 0px 10px 0px;
                }
                .upload-wrapper{
                    justify-content: center;
                    display:flex;
                    padding: 40px 10px;
                }
                .imgWrapper{
                    width:40%;
                    height: 400px;
                    display:block;
                }
                form{
                    margin-left: 30px;
                    padding: 0px 20px 40px 20px;
                    width:30%;
                    background: #FCFCFC;
                    border-radius: 20px;
                    
                }
                img{
                    max-width: 90%;
                    max-height: 600px;
                }
                .uploader-container{
                    display: flex;
                    justify-content: start;
                    align-items: center;    
                }
                #uploader{
                    display:none;
                }
                .fileBtn{
                    width: 100px;
                    padding: 5px 10px;
                    margin: 5px 6px 5px 0px;
                    background: #E9EAEC;
                    border-radius: 10px;
                    font-weight: 550;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                }
                .fileName{
                    width: calc(100%-120px);
                    overflow: hidden;
                }
                .color-radio-container{
                    display:flex;
                    flex-wrap: wrap;
                }
                .genre-radio-container{
                    display:flex;
                    flex-wrap: wrap;
                }
                .label{
                    flex-basis: auto;
                    width: auto;
                    height: 40px;
                    margin: 10px 6px 10px 0px;
                    padding: 5px 10px;
                    background: #E9EAEC;
                    border-radius: 10px;
                    line-height: 40px;
                    font-weight: 550;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                }
                .radio{
                    display: none;
                }
                .selected{
                    background: #F7CB2D;
                }
                .submitBtn{
                    border: none;
                    width: 100%;
                    margin: 30px 6px 10px 0px;
                    padding: 5px 20px;
                    background: #F7CB2D;
                    border-radius: 10px;
                    line-height: 40px;
                    font-weight: 700;
                    cursor: pointer;
                }
                .fileBtn :hover , .label :hover, .submitBtn :hover{
                    background: #F0C426;
                }
            `}</style>
        </div>
    );
}