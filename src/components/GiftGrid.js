// import React, { useState, useEffect } from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
// import { getGift } from '../helpers/getGifts';
import { GiftGridItem } from './GiftGridItem';
import PropTypes from 'prop-types'

export const GiftGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    
    const { data: images, loading } = useFetchGifts( category );
    
    // useEffect(() => {
    //     getGift( category ).then( setImages );
    // }, [ category ]);
    
    
    // getGift();
    
    return (
        <>
            <h3>{category}</h3>

            { loading && <p className='animate__animated animate__zoomIn'>Loading...</p>}
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

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}