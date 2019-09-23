import React from 'react';
import {Button, Card} from 'react-bootstrap';
import Axios from 'axios';
import Utena from './images2/revolutionutena.jpg';
import SailorUsagi from './images2/sailorusagi.jpg';


class theseUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/users')
        .then(response => {
            this.setState({ users: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    userList() {
       const User = props => (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={SailorUsagi} width="286px" height="180px"/>
            <Card.Body>
                <Card.Title>{props.user.name}</Card.Title>
            <Card.Text>
                Name: {props.user.name} <br></br>
                City and State: {props.user.cityAndState} <br></br>
                Age: {props.user.age} <br></br>
                Social Media: {props.user.socialMedia} <br></br>
            </Card.Text>
                <Button variant="primary" onClick={() => this.edit(props.user._id)}>Edit User</Button>
                <span></span>
                <Button variant="danger" onClick={() => this.delete(props.user._id)}>Delete User</Button>
        </Card.Body>
        </Card>
) 
        return this.state.users.map(function(currentUser, i){
            return <User user={currentUser} key={i} />;
        });
    }

    edit(id) {
        this.props.history.push('/edit/' + id)
    }

    delete(id) {
        Axios.delete('http://localhost:3000/api/users/'+id)
        .then(response => {
            let userss = this.state.userss;
            let index = -1
            let counter = 0;
            for (let user of userss){
                if(user._id === id){
                    index = counter;
                    break
                }
                counter++;
            }
            if(index !== -1){
                userss.splice(index, 1);
                this.setState({
                    userss: userss
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

   
        render () {
            return (

                <div>        
                <img className="about-background-image" src={Utena} alt="town" width="100%" height="100%" />
                    <h1 className="title-table">Have a Look at our <br></br>Wonderful Community!</h1>
                    <div className="list-table-navtabs">

                            {this.userList()}

                    </div>
                </div>
            )
        }
    }
    
    
    export default theseUsers;

    /*
    <td><Link to={"/edit/"+props.user._id}>Edit User</Link></td>
    */