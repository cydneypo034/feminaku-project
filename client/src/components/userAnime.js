import React from 'react';
import Axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import Utena from './images2/revolutionutena.jpg'



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
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.anime.name}</Card.Title>
            <Card.Text>
                Anime Name: {props.anime.name} <br></br>
                Favorite Season: {props.anime.favoriteSeason} <br></br>
                Favorite Character: {props.anime.favoriteCharacter} <br></br>
                Would You Cosplay Them?: {props.anime.characterCosplay} <br></br>
            </Card.Text>
                <Button variant="primary" onClick={() => this.edit(props.anime._id)}>Edit Anime</Button>
                <span></span>
                <Button variant="danger" onClick={() => this.delete(props.anime._id)}>Delete Anime</Button>
            </Card.Body>
            </Card>
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
                    <img className="about-background-image" src={Utena} alt="town" width="100%" height="100%" />
                    <h1 className="title-table">Do You have a Favorite <br></br> Anime? List it Here!</h1>
                    <div className="list-table-navtabs">
                     
                            { this.animeList()}

                    </div>
                </div>
            )
        }
    }

export default UsersAnime;