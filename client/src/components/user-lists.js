import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.cityAndState}</td>
        <td>{props.user.age}</td>
        <td>{props.user.socialMedia}</td>

        <td><Link to={"/edit/"+props.user._id}>Edit</Link></td>
            <td><Link to={"/"+props.user._id}>View User's Anime</Link></td>
            

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
        return this.state.users.map(function(currentUser){
            return <User user={currentUser} />;
        })
    }
        render () {
            return (
                <div>
                    <h1 className="fem-welcome">Have a Look at our Wonderful Community!</h1>
                    <table className="table responsive">
                        <thread>
                            <tr>
                            </tr>
                        </thread>
                        <tbody>
                            { this.userList()}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
    
    
    export default theseUsers;