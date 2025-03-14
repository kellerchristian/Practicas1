import React from "react";
import './Gallery.css';
import ImageCard from './ImageCard';
import heroImg from '../assets/hero.png';
import iconImg from '../assets/Icon.png';
import imageImg from '../assets/Image.png';
import rectImg from '../assets/Rectangle.png';
import reactImg from '../assets/react.svg';
import Button from "./Button";


const listCards = [
	{id:0, title:'Hero', src:heroImg, alt:'Una imagen', text:'Lorem20'},
	{id:1, title:'Icono', src:iconImg, alt:'Icono', text:''},
	{id:2, title:'Image', src:imageImg, alt:'Imagen', text:''},
	{id:3, title:'Rectangle', src:rectImg, alt:'Rectangle', text:''},
	{id:4, title:'React', src:reactImg, alt:'React', text:''},
	{id:5, title:'', src:'', alt:'', text:''}
];

const Gallery = () => {
	return (
		<div className="gallery">
            <h1>Mi Galería</h1>
				<div className="gallery-conteiner">
					{listCards.map(card =>
						<ImageCard
							key={card.id}
							item={card}
						/>
					)}
				</div>
        </div>
	);
}

export default Gallery;