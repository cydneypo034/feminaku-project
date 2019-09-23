import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import GirlPink from './images2/cuteanimegirl.png';


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
            <img className="about-background-image" src={GirlPink} alt="town" width="100%" height="100%"/>
                <h1 className="title-table2">★ Need To Fix Anything? Edit It Here! ★</h1>
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
                    <Button variant="info" type="submit" value="Edit Anime">Edit Anime</Button>
                </form>
            </div>
        )
    }
}

export default editAnime;
