import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SailorMoon from './images2/sailor-moonhearts.gif';
import Dawn from './images2/dawn-pokemon.gif';
import Hana from './images2/hanamutou.gif';
import Howl from './images2/howlandsohpie.gif';

class Home extends React.Component {
    render() {
        return (
            <Carousel className="carousel-div" interval="2000" fade="true" indicators={false} controls={false}>
                <Carousel.Item className="car-images">
                    <img
                    className="sailormoon"
                    width="100%"
                    height="100%"
                    src={SailorMoon}
                    alt="Bulma"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Dawn"
                    width="100%"
                    height="100%"

                    src={Dawn}
                    alt="Dawn"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Hana"
                    width="100%"
                    height="100%"

                    src={Hana}
                    alt="Hana"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Howl"
                    width="100%"
                    height="100%"

                    src={Howl}
                    alt="Yumeko"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Home;