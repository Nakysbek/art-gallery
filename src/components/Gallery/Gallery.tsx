import React from 'react';
import './Gallery.css'
import {Photo} from "./Photo/Photo";
import {useGallery} from "../../store";

export type ImagesType = {
    id: number,
    img: string,
    alt: string,
    invented: boolean,
    author: string,
}

export const Gallery = () => {

    const images: ImagesType[] = useGallery(state => state.gallery)


    return (
        <div className='gallery'>
            {
                images.map((image) => {
                    return (
                        <div className='portrait'>
                            <Photo key={image.id} img={image.img} alt={image.alt}/>
                            <div className='actions'>
                                {image.author}
                                <button
                                    style={image.invented ? {backgroundColor: 'blue'} : {backgroundColor: ''}}>В изобранные</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

