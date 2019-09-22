import React from 'react'
import GrassBackground from './images2/grassbackground.jpg'


class About extends React.Component {
    render() {
        return (
            <div className="App2">
                <img className="about-background-image" src={GrassBackground} alt="town" width="100%" height="410"/>
                <h1 className="about-centered">Welcome To Feminaku!</h1>
                <p className="about-paragraph">Feminaku strives to provide a safe space for women 
                who love all genres of anime. Our community is sacred space for connecting with and learning
                from one another. Feel free to connect with other users and let's share our love of anime together.</p>
            </div>
        )
    }
    
}

export default About;