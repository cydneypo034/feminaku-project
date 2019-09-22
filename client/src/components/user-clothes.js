import React from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios';
import {Table} from 'react-bootstrap';


class theseClothes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clothes: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/clothes')
        .then(response => {
            this.setState({ clothes: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    clothesList() {
        const Clothes = props => (
            <tr>
                <td>{props.clothes.storeName}</td>
                <td>{props.clothes.favoriteCharacter}</td>
                <td>{props.clothes.favoriteAccessory}</td>
                <td>{props.clothes.fashionSite}</td>
        
                <td>
                <Button variant="primary" onClick={() => this.edit(props.clothes._id)}>Edit User</Button>
                <span></span>
                <Button variant="danger" onClick={() => this.delete(props.clothes._id)}>Delete User</Button>
                </td>
        
            </tr>
        )
        return this.state.clothes.map(function(currentClothes, i){
            return <Clothes clothes={currentClothes} key={i} />;
        })
    }
    edit(id) {
        this.props.history.push('/editclothes/' + id)
    }

    delete(id) {
        Axios.delete('http://localhost:3000/api/clothes/'+id)
        .then(response => {
            let clothess = this.state.clothess;
            let index = -1
            let counter = 0;
            for (let clothes of clothess){
                if(clothes._id === id){
                    index = counter;
                    break
                }
                counter++;
            }
            if(index !== -1){
                clothess.splice(index, 1);
                this.setState({
                    clothess: clothess
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

   
        render () {
            return (
                <div className="container">
                    <h1 className="fem-welcome">All of our Favorite Merchandise Places!</h1>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            <tr className="color-names-table">
                                <td>Store Name</td>
                                <td>Favorite Character</td>
                                <td>Favorite Accessory</td>
                                <td>Fashion Website</td>
                            </tr> 
                            {this.clothesList()}
                            
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
    
    
    export default theseClothes;