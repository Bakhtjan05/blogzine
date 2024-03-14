// ExampleCarouselImage.js

import React from 'react';
import "./CarouselImage.scss"

function ExampleCarouselImage({ images }) {
    const backgroundImageStyle = {
        backgroundImage: `url(${images})`
    }
    
    return (
        <div className='heroBlock' style={backgroundImageStyle}>
            <div>
                <button className='btn btn-danger'>
                    <div className='circle'></div>
                    Lifestyle
                </button>
            </div>
            <div></div>
        </div>
    );
}

export default ExampleCarouselImage;
