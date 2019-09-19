import React from 'react'
import Geometric from './images2/HW97Y94.jpg'

class About extends React.Component {
    render() {
        return (
            <div className="App2">
                <img className="about-background-image" src={Geometric} alt="Picture of town" width="100%"/>
            </div>
        )
    }
    
}

export default About;