import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {Table} from 'react-bootstrap';

const User = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.cityAndState}</td>
        <td>{props.user.age}</td>
        <td>{props.user.socialMedia}</td>

        <td><Link to={"/edit/"+props.user._id}>Edit User</Link></td>

    </tr>
)
class theseUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/user')
        .then(response => {
            this.setState({ users: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    userList() {

        return this.state.users.map(function(currentUser, i){
            return <User user={currentUser} key={i} />;
        })
    }

   
        render () {
            return (
                <div className="container">
                    <h1 className="fem-welcome">Have a Look at our Wonderful Community!</h1>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>City and State</td>
                                <td>Age</td>
                                <td>Social Media</td>
                            </tr> 
                            {this.userList()}
                            
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
    
    
    export default theseUsers;