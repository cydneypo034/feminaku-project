import React from 'react';
import axios from 'axios';

class Anime extends React.Component {
    
    state = {
        anime: []
    }

    componentDidMount() {
        axios.get(`/api/anime`)
        .then(res => {
            const anime = res.data;
            this.setState( {anime})
        })
    }

    render () {
        return (
            <ul>
                { this.state.anime.map(anime => <li>{anime.name}</li>)}
            </ul>
        )
    }
}


export default Anime;