
import React from 'react'
import PropTypes from 'prop-types'

export const GiftGridItem = ({title, url}) => {

    // console.log(id, title, url)
    
    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={url} alt={title}></img>
            <p>{ title }</p>
        </div>
    )
}

GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}