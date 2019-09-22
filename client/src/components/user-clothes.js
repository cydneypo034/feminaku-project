import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {Table} from 'react-bootstrap';

const Clothes = props => (
    <tr>
        <td>{props.clothes.storeName}</td>
        <td>{props.clothes.favoriteCharacter}</td>
        <td>{props.clothes.shirtsDressesOrPants}</td>
        <td>{props.clothes.favoriteAccessory}</td>
        <td>{props.clothes.fashionSite}</td>
        <td>{props.clothes.shoeSize}</td>

        <td><Link to={"/editclothes/"+props.clothes._id}>Edit Clothes</Link></td>

    </tr>
)
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

        return this.state.clothes.map(function(currentClothes, i){
            return <Clothes clothes={currentClothes} key={i} />;
        })
    }

   
        render () {
            return (
                <div className="container">
                    <h1 className="fem-welcome">All of our Favorite Merchandise Places!</h1>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Store Name</td>
                                <td>Favorite Character</td>
                                <td>Shirts, Dresses, Pants or All?</td>
                                <td>Favorite Accessory</td>
                                <td>Fashion WebSite</td>
                                <td>Shoe Size</td>
                            </tr> 
                            {this.clothesList()}
                            
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
    
    
    export default theseClothes;