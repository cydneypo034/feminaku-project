import React from 'react';
import Axios from 'axios';
import {Button} from 'react-bootstrap';
import CoupleTree from './images2/cuteanimegirl.png';


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
            <div>
                <img className="about-background-image" src={CoupleTree} alt="town" width="100%" height="100%"/>
                <h1 className="title-table2"> ★ Got a Favorite Anime? Enter It Below! ★</h1>
                <form className="this-form" onSubmit={this.handleSubmitInput}>
                    <label className="text-class2">Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <label className="text-class2">Favorite Season</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteSeason}
                        onChange={this.onChangeFavoriteSeason}
                    />
                    <label className="text-class2">Favorite Character</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.favoriteCharacter}
                        onChange={this.onChangeFavoriteCharacter}
                    />
                    <label className="text-class2">Would You Cosplay Them?</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.characterCosplay}
                        onChange={this.onChangeCharacterCosplay}
                    />
                    <br></br>
                <Button variant="info" type="submit" value="Add Anime">Add Anime</Button>                
                </form>
            </div>
        )
    }
}
export default CreateAnime;