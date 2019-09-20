import React from 'react';
import axios from 'axios';

class Clothes extends React.Component {
    
    state = {
        clothes: []
    }

    componentDidMount() {
        axios.get(`/api/clothes`)
        .then(res => {
            const clothes = res.data;
            this.setState( {clothes} )
        })
    }

    render () {
        return (
            <ul>
                { this.state.clothes.map(clothes => <li>{clothes.name}</li>)}
            </ul>
        )
    }
}


export default Clothes;