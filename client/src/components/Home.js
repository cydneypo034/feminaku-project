import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SailorMoon from './images2/sailor-moonhearts.gif';
import Dawn from './images2/dawn-pokemon.gif';
import Shiinoa from './images2/shiinoahiirage.gif';
import Yumkeo from './images2/yumeko.gif';

class Home extends React.Component {
    render() {
        return (
            <Carousel className="carousel-div" interval="2000" fade="true" indicators={false} controls={false}>
                <Carousel.Item className="car-images">
                    <img
                    className="sailormoon"
                    width="1110"
                    height="390"
                    src={SailorMoon}
                    alt="Bulma"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Dawn"
                    width="1110"
                    height="390"

                    src={Dawn}
                    alt="Dawn"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Shiinoa"
                    width="1110"
                    height="390"

                    src={Shiinoa}
                    alt="Shiinoa"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Yumeko"
                    width="1110"
                    height="390"

                    src={Yumkeo}
                    alt="Yumeko"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Home;