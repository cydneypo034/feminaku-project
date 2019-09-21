import React from 'react';
import Axios from 'axios';


const Anime = props => (
    <tr>
        <td>{props.anime.name}</td>
        <td>{props.anime.favoriteSeason}</td>
        <td>{props.anime.numberOfSeasons}</td>
        <td>{props.anime.favoriteCharacter}</td>
        <td>{props.anime.animeGenre}</td>
        <td>{props.anime.characterCosplay}</td>
    </tr>
)

class UsersAnime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anime: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/anime')
        .then(response => {
            this.setState({ anime: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    animeList() {
        return this.state.anime.map(function(animeDisplayed){
            return <Anime anime={animeDisplayed} />;
        })
    }
        render () {
            return (
                <div>
                    <h1 className="fem-welcome">These shows are ranked a 10 out of 10!</h1>
                    <table className="table responsive">
                        <thread>
                            <tr>
                            </tr>
                        </thread>
                        <tbody>
                            { this.animeList()}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

export default UsersAnime;