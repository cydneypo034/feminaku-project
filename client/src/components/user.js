import React from 'react';
import Home from './Home.js';
import About from './About.js';


class Users extends React.Component {

    

    render () {
        return (
            <div>
             <h1 className="fem-welcome">Welcome to Feminaku!</h1>
                <About />
                <Home />
                
            </div>
        )
    }
}


export default Users;