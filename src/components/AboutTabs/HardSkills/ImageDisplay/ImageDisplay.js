import react from 'react';
import "./ImageDisplay.scss";

const ImageDisplay = ({title, imageLink}) => {
    return (
        <div className={"image-display"}>
            <img src={imageLink} alt={title} />
            <div className={"title"}>
                {/*<p>{title}</p>*/}
            </div>
        </div>
    );
}

export default ImageDisplay;