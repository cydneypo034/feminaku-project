import React from 'react';
import Axios from 'axios';
import {Button} from 'react-bootstrap';

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
            <div className="container">

                <h1 className="fem-welcome">Where do you buy merch from? Enter Your Info Below!</h1>
                <form onSubmit={this.handleSubmitInput}>
                    <label>Store Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.storeName}
                        onChange={this.onChangeStoreName}
                    />
                    <label>Favorite Character</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteCharacter}
                        onChange={this.onChangeFavoriteCharacter}
                    />
                    <label>Favorite Accessory</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteAccessory}
                        onChange={this.onChangeFavoriteAccesory}
                    />
                    <label>Fashion Site</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.fashionSite}
                        onChange={this.onChangeFashionSite}
                    />
                    <Button variant="info" type="submit" value="Add Clothes">Add Clothes</Button>
                </form>
            </div>
        )
    }
}
export default CreateClothes;