import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SailorMoon from './images2/sailor-moonhearts.gif';
import Dawn from './images2/dawn-pokemon.gif';
import Shiinoa from './images2/shiinoahiirage.gif';

class Home extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="bulma"
                    src={SailorMoon}
                    width="100%"
                    fluid
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Dawn"
                    src={Dawn}
                    width="100%"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="Shiinoa"
                    src={Shiinoa}
                    width="100%"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Home;