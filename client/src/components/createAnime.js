import React from 'react';
import Axios from 'axios';
import {Button} from 'react-bootstrap';

class CreateAnime extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeFavoriteSeason = this.onChangeFavoriteSeason.bind(this)
        this.onChangeFavoriteCharacter = this.onChangeFavoriteCharacter.bind(this)
        this.onChangeCharacterCosplay = this.onChangeCharacterCosplay.bind(this)


        this.state = {
            name: ' ',
            favoriteSeason: ' ',
            favoriteCharacter: ' ',
            characterCosplay: ' '
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeFavoriteSeason(e) {
        this.setState({
            favoriteSeason: e.target.value
        })
    }
    onChangeFavoriteCharacter(e) {
        this.setState({
            favoriteCharacter: e.target.value
        })
    }

    onChangeCharacterCosplay(e) {
        this.setState({
            characterCosplay: e.target.value
        })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();

        console.log(`Form submitted:`)

        //for using axios to grab the data from the api
        const myNewAnime = {
            name: this.state.name,
            favoriteSeason: this.state.favoriteSeason,
            favoriteCharacter: this.state.favoriteCharacter,
            characterCosplay: this.state.characterCosplay,
        };
        //for using axios to grab the data from the api
        Axios.post('http://localhost:3000/api/anime', myNewAnime)
            .then(res => console.log(res.data))

        this.setState({
            name: '',
            favoriteSeason: '',
            favoriteCharacter: '',
            characterCosplay: ''
        })
    }

    render() {
        return (
            <div className="container">

                <h1 className="fem-welcome">Got a Favorite Anime? Create it Here!</h1>
                <form onSubmit={this.handleSubmitInput}>
                    <label>Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <label>Favorite Season</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteSeason}
                        onChange={this.onChangeFavoriteSeason}
                    />
                    <label>Favorite Character</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteCharacter}
                        onChange={this.onChangeFavoriteCharacter}
                    />
                    <label>Would You Cosplay Them?</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.characterCosplay}
                        onChange={this.onChangeCharacterCosplay}
                    />
                <Button variant="info" type="submit" value="Add Anime">Add Anime</Button>                
                </form>
            </div>
        )
    }
}
export default CreateAnime;