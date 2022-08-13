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
                    <h4>Upload your own zzal.</h4>
                    <input type="file" id="uploader" name="upfile[]" onChange={onChangeCaptureHandler} multiple/>
                    <label htmlFor="uploader" className="btn fileBtn">파일 선택</label>
                    <span id="fileName" >{imageName.current}</span>
                    
                    <br />
                    <h4>Select zzal color tone.</h4>
                    <input type="radio" name="zzal_color" className="radio" id="color" value="컬러"  onClick={onClickColor}/> <label className={"label" + (selectedColor===0?" selected":"")} htmlFor="color">컬러</label>
                    <input type="radio" name="zzal_color" className="radio" id="grayscale" value="흑백"  onClick={onClickColor}/> <label className={"label" + (selectedColor===1?" selected":"")} htmlFor="grayscale">흑백</label>
                    <br />
                    <h4>Select zzal genre(type).</h4>
                    <div className="genreWrapper">
                        {genreList.map((item, index) => 
                            <div key={item[0]}>
                                <input type="radio" name="zzal_genre" className="radio" id={item[1]} value={item[0]} onClick={onClickGenre}/> 
                                <label className={"label" + (index===selectedGenre?" selected":"")} htmlFor={item[1]}>{item[0]}</label>
                            </div>
                        )}
                    </div>
                    {
                        selectedImage &&
                        <div>
                           
                        </div>

                    }
                    <h3>Type keywords to describe the zzal.</h3>
                    <br />

                    <ReactTags 
                        tags={tags}
                        delimiters={delimiters}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        handleTagClick={handleTagClick}
                        inputFieldPosition="bottom"
                        autocomplete
                    />

                    <br />
                    <h3>Submit the zzal.</h3>
                    <input type="submit" formMethod="POST" formAction="/api/upload" value="전송" />
                </form>
            </div>
            <style jsx>{`
                .upload{
                    height:85vh;
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
                    width:40%;
                }
                img{
                    max-width: 100%;
                    max-height: 600px;
                }
                #uploader{
                    display:none;
                }
                .fileBtn{
                    border: solid 3px pink;
                    margin: 5px 3px;
                    background: #f4f0ec;
                    radius: 5px;
                }
                .genreWrapper{
                    display:flex;
                }
                .label{
                    margin: 5px 3px;
                    padding: 5px 5px;
                    background: #f4f0ec;

                    radius: 5px;
                }
                .radio{
                    display: none;
                }
                .selected{
                    border: solid 2px pink;
                }
            `}</style>
        </div>
    );
}