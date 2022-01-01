import React, { useState, useEffect } from 'react'
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGift();
    }, []);
    
    const getGift = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=RraQhFryndIMZlN8Z0633eAiuoLe9XR1'

        const resp = await fetch(url);
        const { data } = await resp.json()

        const gifts = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });
        setImages(gifts);
        console.log(gifts)
    }
    
    // getGift();
    
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GiftGridItem 
                            key={img.id}
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
