import React from 'react';
import BlossomTree from './images2/wp2760838.jpg';
import axios from 'axios';

class Users extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`/api/user`)
        .then(res => {
            const persons = res.data;
            this.setState( { persons })
        })
    }

    render () {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}

class UserList extends React.Component {
    
    render () {
        return (
            <div className="User">
            {Users}
            <img className="User-background" src={BlossomTree} alt="tree" width='100%' />
            <h1 className="about-centered">Users</h1>

            </div>
        )
    }
}

export default UserList;