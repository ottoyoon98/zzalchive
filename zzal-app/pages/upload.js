import {useState, useRef} from "react";
import Image from "next/image";
export default function upload(){
    const pub = process.env.PUBLIC_URL || "";
    const [selectedImage, setSelectedImage] = useState();
    const imageName = useRef("선택된 파일 없음");

    const onChangeCaptureHandler = (e) => {
        
        if (e.target.files && e.target.files.length > 0){
            console.log(e.target.files[0].name);
            e.target.innerHTML = e.target.files[0].name;
            setSelectedImage(e.target.files[0]);
            imageName.current=e.target.files[0].name;
        }
    };
    const onChange = (e) => {

    }
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
                    <label>Upload your own zzal.</label>
                    <br />
                    <br />
                    <input id="uploader" type="file" name="upfile[]" value=""  onChange={onChangeCaptureHandler} multiple/>
                    <label htmlFor="uploader" className="btn fileBtn">파일 선택</label>
                    <span id="fileName" >{imageName.current}</span>
                    
                    <br />
                    <br />
                    <label>Select zzal type.</label>
                    <br />
                    <br />
                    {
                        selectedImage &&
                        <div>`hi`
                           
                        </div>

                    }
                    <br />
                    <label>Type keywords to describe the zzal.</label>
                    <br />
                    <input type="text"></input>
                    <br />
                    <br />
                    <label>Submit the zzal.</label>
                    <input type="submit" forEncType="multipart/form-data"
                            formMethod="POST" formAction="/api/upload" value="전송" />
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
            `}</style>
        </div>
    );
}