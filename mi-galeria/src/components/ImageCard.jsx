import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {
    const { key, item } = props;

    return (
        <div className="image-card" id={key}>
            <img src={item.src} alt={item.alt} />
            <h4>{item.title}</h4>
            <p>{item.text}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vero dicta fuga ab eius accusantium. Eveniet consequuntur labore deleniti maiores.</p>
        </div>
    );
}

export default ImageCard;