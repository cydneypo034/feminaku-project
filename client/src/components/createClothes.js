import React from 'react';
import Axios from 'axios';

class CreateClothes extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeStoreName = this.onChangeStoreName.bind(this)
        this.onChangeFavoriteCharacter = this.onChangeFavoriteCharacter.bind(this)
        this.onChangeShirtsDressesOrPants = this.onChangeShirtsDressesOrPants.bind(this)
        this.onChangeFavoriteAccesory = this.onChangeFavoriteAccessory.bind(this)
        this.onChangeFashionSite = this.onChangeFashionSite.bind(this)
        this.onChangeShoeSize = this.onChangeShoeSize.bind(this)

        this.state = {
            storeName: ' ',
            favoriteCharacter: ' ',
            shirtsDressesOrPants: ' ',
            favoriteAccessory: ' ',
            fashionSite: '',
            shoeSize: 0
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
    onChangeShirtsDressesOrPants(e) {
        this.setState({
            shirtsDressesOrPants: e.target.value
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
    onChangeShoeSize(e) {
        this.setState({
            shoeSize: e.target.value
        })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();

        console.log(`Form submitted:`)

        //for using axios to grab the data from the api
        const myNewClothes = {
            storeName: this.state.storeName,
            favoriteCharacter: this.state.favoriteCharacter,
            shirtsDressesOrPants: this.state.shirtsDressesOrPants,
            favoriteAccessory: this.state.favoriteAccessory,
            fashionSite: this.state.fashionSite,
            shoeSize: this.state.shoeSize
        };
        //for using axios to grab the data from the api
        Axios.post('http://localhost:3000/api/clothes', myNewClothes)
            .then(res => console.log(res.data))

        this.setState({
            storeName: ' ',
            favoriteCharacter: ' ',
            shirtsDressesOrPants: ' ',
            favoriteAccessory: ' ',
            fashionSite: '',
            shoeSize: 0
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
                    <label>Shirts, Dresses or Pants?</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.shirtsDressesOrPants}
                        onChange={this.onChangeShirtsDressesOrPants}
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
                    <label>Shoe Size</label>
                    <input type="number"
                        className="form-control"
                        value={this.state.shoeSize}
                        onChange={this.onChangeShoeSize}
                    />
                    <input type="submit" value="Add Clothes" />
                </form>
            </div>
        )
    }
}
export default CreateClothes;