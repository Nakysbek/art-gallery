import React from 'react';
import './Invented.css'
import {Photo} from "../Gallery/Photo/Photo";
import {useGallery} from "../../store";
import {ImagesType} from "../Gallery/Gallery";

export const Invented = () => {

    const images: ImagesType[] = useGallery(state => state.gallery)

    return (
        <div className='invented'>
            {
                images.map((image, index) => {
                    if (image.invented) {
                        return (
                            <Photo key={index} img={image.img} alt={image.alt}/>
                        )
                    }
                })
            }
        </div>
    );
};

