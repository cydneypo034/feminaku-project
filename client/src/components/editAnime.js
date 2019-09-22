import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

class editAnime extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeFavoriteSeason = this.onChangeFavoriteSeason.bind(this)
        this.onChangeFavoriteCharacter = this.onChangeFavoriteCharacter.bind(this)
        this.onChangeCharacterCosplay = this.onChangeCharacterCosplay.bind(this)

        this.state = {
            name: ' ',
            favoriteSeason: ' ',
            favoriteCharacter: '',
            characterCosplay: ' ',
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/anime/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                name: res.data.name,
                favoriteSeason: res.data.favoriteSeason,
                favoriteCharacter: res.data.favoriteCharacter,
                characterCosplay: res.data.characterCosplay
            })
        })
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
        console.log(`name: ${this.state.name}`)

        //for using axios to grab the data from the api
        const editedAnime = {
            name: this.state.name,
            favoriteSeason: this.state.favoriteSeason,
            favoriteCharacter: this.state.favoriteCharacter,
            characterCosplay: this.state.characterCosplay,
        };
        //for using axios to grab the data from the api
        Axios.put('http://localhost:3000/api/anime/' + this.props.match.params.id, editedAnime)
            .then(res => console.log(res.data))

        this.props.history.push('/allanime');
    }


    
    render() {
        return (
            <div>
                <h1 className="fem-welcome">Need To Fix Anything? Edit It Here!</h1>
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
                    <Button variant="info" type="submit" value="Edit Anime">Edit Anime</Button>
                </form>
            </div>
        )
    }
}

export default editAnime;
