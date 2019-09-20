import React from 'react';
import Axios from 'axios';

class createUsers extends React.Component {

    constructor(props) {
        super(props);

        
        this.state = {
            name: ' ',
            originCity: ' ',
            age: 0,
            instagram: ' ',
            favoriteAnime: ' ',
            favoriteFood: ' '
    }
    }

    handleChangeInput = (event) => {
        let newUser = {...this.state.newUser}

        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();
        
        console.log(`Form submitted:`)
        console.log(`name: ${this.state.name}`)
        console.log(`originCity: ${this.state.originCity}`)
        console.log(`age: ${this.state.age}`)
        console.log(`instagram: ${this.state.instagram}`)
        console.log(`favoriteAnime: ${this.state.favoriteAnime}`)
        console.log(`favoriteFood: ${this.state.favoriteFood}`)

        const myNewUser = {
            name: this.state.name,
            originCity: this.state.originCity,
            age: this.state.age,
            instagram: this.state.instagram,
            favoriteAnime: this.state.favoriteAnime,
            favoriteFood: this.state.favoriteFood
        };

        Axios.post('http://localhost:3000/api/user', myNewUser)
        .then(res => console.log(res.data))

        this.setState({
            name: '',
            originCity: '',
            age: 0,
            instagram: '',
            favoriteAnime: '',
            favoriteFood: ''
        })
    }

    render () {
        return (
            <div>
            
                <h1>Create Users</h1>
                <form onSubmit={this.handleSubmitInput}>
                    <input type="text"
                    name="name"
                    placeholder="User's Name"
                    onChange={this.handleChangeInput}
                   />
                   <input type="text"
                    name="originCity"
                    placeholder="User's City"
                    onChange={this.handleChangeInput}
                   />
                   <input type="number"
                    name="age"
                    placeholder="User's Age"
                    onChange={this.handleChangeInput}
                   />
                   <input type="text"
                    name="instagram"
                    placeholder="User's Instagram"
                    onChange={this.handleChangeInput}
                   />
                   <input type="text"
                    name="favoriteAnime"
                    placeholder="User's Favorite Anime"
                    onChange={this.handleChangeInput}
                   />
                   <input type="text"
                    name="favoriteFood"
                    placeholder="User's Favorite Food"
                    onChange={this.handleChangeInput}
                   />
                   <input type="submit" value="Add User" />
                </form>
                </div>
        )
    }
}


export default createUsers;

/*
class App2 extends React.Component {
    state = {
        name: 'Felicia Hampton',
        originCity: 'Baltimore',
        age: 20,
        instagram: '@fixitfelicia',
        favoriteAnime: 'Sailor Moon',
        favoriteFood: 'Poke Bowls'
    }

    addNewUser = (brandNewUser) => {
        let user = {...this.state.user}

        user.name.push(brandNewUser)
        this.setState( {user} )
    }

    render() {
        return (
            <div>
                <h1>New Users</h1>
                <createUsers 
                addUser={this.addNewUser} />
            </div>
        )
    }

}

*/