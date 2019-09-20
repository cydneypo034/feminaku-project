import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('/api/user')
        .then(res => {
            this.setState( {res} )
        })
    }

    render () {
        return (
            <ul>
                { this.state.users.map(user => <li>{user.name}</li>)}
            </ul>
        )
    }
}


export default Users;