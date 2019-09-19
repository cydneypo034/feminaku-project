import React from 'react'
import Geometric from './images2/HW97Y94.jpg'

class About extends React.Component {
    render() {
        return (
            <div className="App2">
                <img className="about-background-image" src={Geometric} alt="Picture of town" width="100%" height="410"/>
                <h1 className="about-centered">About</h1>
                <p className="about-paragraph">Feminaku strives to provide a safe space for women 
                who love all genres of anime. Our community is sacred space for connecting with and learning
                from one another.</p>
            </div>
        )
    }
    
}

export default About;