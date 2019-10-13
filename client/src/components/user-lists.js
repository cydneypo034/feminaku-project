import React from 'react';
import {Button, Card} from 'react-bootstrap';
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
        fetch('/api/users')
        .then(res => res.json())
        .then(response => {
            this.setState({ users: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    userList() {
       const User = props => (
        <Card style={{ width: '20rem' }}>
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
        fetch('http://localhost:3000/api/users/'+ id ,
        { method: "DELETE",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(id)
      }).then(res => res.json())

      .then(res => console.log(id))
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