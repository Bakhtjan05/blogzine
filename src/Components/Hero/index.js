import React from 'react'
import "./Hero.scss"
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../CarouselImage';


function Hero() {
    const imageSrc = [
        "https://blogzine.webestica.com/assets/images/blog/16by9/big/01.jpg",
        "https://blogzine.webestica.com/assets/images/blog/16by9/big/02.jpg",
        "https://blogzine.webestica.com/assets/images/blog/16by9/big/03.jpg",
    ]


    return (
        <section>
            <Carousel indicators={false} controls={false} interval={5000}>
                {imageSrc.map((src, index) => (
                    <Carousel.Item key={index}>
                        <ExampleCarouselImage text="First slide" images={src} />
                    </Carousel.Item>
                ))}
                
            </Carousel>
            
        </section>
    )
}

export default Hero

