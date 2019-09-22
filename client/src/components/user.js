import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Footer from './footer.js';



class Users extends React.Component {
    render () {
        return (
            <div>
                <About />
                <Home />
                <Footer />
            </div>
        )
    }
}


export default Users;