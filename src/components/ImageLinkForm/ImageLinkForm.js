import React from "react";
import "./ImageLinkForm.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ImageLinkForm = ({onInputChange, onButtonSubmit, isImageLoading}) => {
    return (
        <div>
            <p className='f3'>
                {'This magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center">
                {
                    isImageLoading === false ?  (
                        <div className="form center pa4 br3 shadow-5">
                        <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                        <button 
                            className="w-30 grow f4 link ph4 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
                            </div>
                    ) :
                    <Loader type="Ball-Triangle"
                                color="#FFFFFF"
                                height={100}
                                width={100}
                                timeout={3000} //3 secs
                            />
                }
                
            </div>
        </div>
        
    );
}

export default ImageLinkForm;