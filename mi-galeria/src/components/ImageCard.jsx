import React from 'react';
import './ImageCard.css';

const ImageCard = ({ imageSrc, altText }) => {
    return (
        <div className="image-card">
            <img src={imageSrc} alt={altText} />
        </div>
    );
}

export default ImageCard;