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
                <h1>
                    <a href="#">10 tell-late signs you need to get a new startup.</a>
                </h1>
                <p>
                    No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case 
                </p>
                <div>
                    <div>
                        <img src="https://blogzine.webestica.com/assets/images/avatar/11.jpg" alt="" />
                    </div>
                    <p>by <span><a href="#">Louis</a></span></p>
                    <p>Jan 01, 2022</p>
                    <p>5 min read</p>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default ExampleCarouselImage;
