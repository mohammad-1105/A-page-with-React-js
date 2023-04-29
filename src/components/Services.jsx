import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Services = () => {
    return (
        <>
            <div className='carouselContainer'>


                <Carousel
                    infiniteLoop
                    autoPlay
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    interval={1500}
                >
                    <div >
                        <img src={img1} alt="item1" />
                        <p className='legend'>Full Stack Development</p>
                    </div>
                    <div>
                        <img src={img2} alt="item2" />
                        <p className='legend'>Peer to peer support</p>
                    </div>



                </Carousel>
            </div>
        </>
    )
}

export default Services