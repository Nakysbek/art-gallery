import React from 'react';
import './Photo.css'

type PhotoType = {
    img: string,
    alt: string,
}

export const Photo = ({img, alt}: PhotoType) => {
    return (
        <div className='photo'>
            <img src={img} alt={alt}/>
        </div>
    );
};

