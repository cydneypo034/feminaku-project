import React from 'react';
import Axios from 'axios';
import {Button} from 'react-bootstrap';
import Utena from './images2/kawaiigirl.jpg';


class CreateClothes extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeStoreName = this.onChangeStoreName.bind(this)
        this.onChangeFavoriteCharacter = this.onChangeFavoriteCharacter.bind(this)
        this.onChangeFavoriteAccesory = this.onChangeFavoriteAccessory.bind(this)
        this.onChangeFashionSite = this.onChangeFashionSite.bind(this)

        this.state = {
            storeName: ' ',
            favoriteCharacter: ' ',
            favoriteAccessory: ' ',
            fashionSite: ''
        }
    }
    onChangeStoreName(e) {
        this.setState({
            storeName: e.target.value
        })
    }
    onChangeFavoriteCharacter(e) {
        this.setState({
            favoriteCharacter: e.target.value
        })
    }
    onChangeFavoriteAccessory(e) {
        this.setState({
            favoriteAccessory: e.target.value
        })
    }
    onChangeFashionSite(e) {
        this.setState({
            fashionSite: e.target.value
        })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();

        console.log(`Form submitted:`)

        //for using axios to grab the data from the api
        const myNewClothes = {
            storeName: this.state.storeName,
            favoriteCharacter: this.state.favoriteCharacter,
            favoriteAccessory: this.state.favoriteAccessory,
            fashionSite: this.state.fashionSite,
        };
        //for using axios to grab the data from the api
        Axios.post('http://localhost:3000/api/clothes', myNewClothes)
            .then(res => console.log(res.data))

        this.setState({
            storeName: ' ',
            favoriteCharacter: ' ',
            favoriteAccessory: ' ',
            fashionSite: ''
        })
    }

    render() {
        return (
            <div>
              <img className="about-background-image" src={Utena} alt="town" width="100%" height="700px"/>
                <h1 className="title-table2">★ Any Favorite Merch Stores? Enter Them! ★</h1>
                <form className="this-form" onSubmit={this.handleSubmitInput}>
                    <label className="text-class">Store Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.storeName}
                        onChange={this.onChangeStoreName}
                    />
                    <label className="text-class">Favorite Character</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteCharacter}
                        onChange={this.onChangeFavoriteCharacter}
                    />
                    <label className="text-class">Favorite Accessory</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteAccessory}
                        onChange={this.onChangeFavoriteAccesory}
                    />
                    <label className="text-class">Fashion Site</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.fashionSite}
                        onChange={this.onChangeFashionSite}
                    />
                    <br></br>
                    <Button variant="info" type="submit" value="Add Clothes">Add Clothes</Button>
                </form>
                </div>
        )
    }
}
export default CreateClothes;