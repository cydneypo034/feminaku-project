import React from 'react';
import BlossomTree from './images2/wp2760838.jpg';

class UserList extends React.Component {
    
    render () {
        return (
            <div className="User">

            <img className="User-background" src={BlossomTree} width='100%' />

            </div>
        )
    }
}

export default UserList;