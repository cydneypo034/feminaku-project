import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Blossoms from './images2/blossoms.jpg'



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
        const Anime = props => (
            <tr>
                <td>{props.anime.name}</td>
                <td>{props.anime.favoriteSeason}</td>
                <td>{props.anime.favoriteCharacter}</td>
                <td>{props.anime.characterCosplay}</td>

                <td>
                <Button variant="primary" onClick={() => this.edit(props.anime._id)}>Edit Anime</Button>
                <span></span>
                <Button variant="danger" onClick={() => this.delete(props.anime._id)}>Delete Anime</Button>
                </td>
            </tr>
)
        return this.state.anime.map(function(animeDisplayed){
            return <Anime anime={animeDisplayed} />;
        });
    }
    edit(id) {
        this.props.history.push('/editanime/' + id)
    }

    delete(id) {
        Axios.delete('http://localhost:3000/api/anime/'+id)
        .then(response => {
            let animes = this.state.animes;
            let index = -1
            let counter = 0;
            for (let anime of animes){
                if(anime._id === id){
                    index = counter;
                    break
                }
                counter++;
            }
            if(index !== -1){
                animes.splice(index, 1);
                this.setState({
                    animes: animes
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
                    <img className="about-background-image" src={Blossoms} alt="town" width="100%" height="100%"/>
                    <h1 className="title-table">Do You have a Favorite <br></br> Anime? List it Here!</h1>
                    <div className="list-table-navtabs">
                    <Table striped bordered hover variant="light">  
                        <tbody>
                            <tr className="color-names-table">
                                <td>Name</td>
                                <td>Favorite Season</td>
                                <td>Favorite Character</td>
                                <td>Would You Cosplay Them?</td>
                            </tr> 
                            { this.animeList()}
                        </tbody>
                    </Table>
                    </div>
                </div>
            )
        }
    }

export default UsersAnime;