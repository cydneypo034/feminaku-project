import React from 'react';
import {Button, Card} from 'react-bootstrap';
import Axios from 'axios';
import Utena from './images2/revolutionutena.jpg';
import MyHero from './images2/ouran.jpeg';

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
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={MyHero} width="186px" height="180px"/>

                <Card.Body>
                <Card.Title>{props.clothes.storeName}</Card.Title>
                <Card.Text>
                Store Name:{props.clothes.storeName}<br></br>
                Favorite Character: {props.clothes.favoriteCharacter}<br></br>
                Favorite Accessory: {props.clothes.favoriteAccessory}<br></br>
                Fashion Website: {props.clothes.fashionSite}<br></br>
                </Card.Text>
                <Button variant="primary" onClick={() => this.edit(props.clothes._id)}>Edit Info</Button>
                <span></span>
                <Button variant="danger" onClick={() => this.delete(props.clothes._id)}>Delete Info</Button>
                </Card.Body>
            </Card>
       
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
                <div>
                 <img className="about-background-image" src={Utena} alt="town" width="100%" height="100%" />
                    <h1 className="title-table">All of our Favorite <br></br> Merchandise Places!</h1>
                    <div className="list-table-navtabs">
                    
                            {this.clothesList()}
                
                    </div>
                </div>
            )
        }
    }
    
    
    export default theseClothes;