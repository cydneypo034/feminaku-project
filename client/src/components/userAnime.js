import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Anime = props => (
    <tr>
        <td>{props.anime.name}</td>
        <td>{props.anime.favoriteSeason}</td>
        <td>{props.anime.favoriteCharacter}</td>
        <td>{props.anime.characterCosplay}</td>

        <td><Link to={"/editAnime/"+props.anime._id}>Edit This Anime</Link></td>

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
                    <h1 className="fem-welcome">Do You have a Favorite Anime? List it Here!</h1>
                    <Table striped bordered hover>
                        
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Favorite Season</td>
                                <td>Favorite Character</td>
                                <td>Would You Cosplay Them?</td>
                            </tr> 
                            { this.animeList()}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }

export default UsersAnime;