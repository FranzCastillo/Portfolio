import "./ImageDisplay.scss";

const ImageDisplay = ({ title, imageLink }) => {
    return (
        <div className="image-display">
            <img src={imageLink} alt={title} />
            <div className="title-overlay"></div>
            <div className="title">
                <div className="title-text">{title}</div>
            </div>
        </div>
    );
}

export default ImageDisplay;
