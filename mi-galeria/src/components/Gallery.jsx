import React from "react";
import './Gallery.css';
import ImageCard from './ImageCard';


const Gallery = () => {
	return (
		<div className="gallery">
            <h1>Mi Galería</h1>
				<div className="gallery-conteiner">
					<ImageCard imageSrc='src/assets/hero.png' altText="Una imagen" />
            		<ImageCard imageSrc='src/assets/hero.png' altText="Una imagen" />
            		<ImageCard imageSrc='src/assets/hero.png' altText="Una imagen" />
            		<ImageCard imageSrc='src/assets/hero.png' altText="Una imagen" />
            		<ImageCard imageSrc='src/assets/hero.png' altText="Una imagen" />
				</div>
        </div>
	);
}

export default Gallery;