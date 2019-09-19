import React from 'react';

class AddUserForm extends React.Component {

    state = {
        name: " ",
        originCity: " ",
        age: 0,
        instagram: " ",
        favoriteAnime: " ",
        favoriteFood: " "
    }

    handleChange = (evnt) => {
        let newUser = {...this.state.newUser}
        newUser[evnt.target.name] = evnt.target.value
        this.setState({ newUser })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();

        this.props.addUser(this.state.newUser)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="User's Name"
                />
                <input 
                type="text"
                name="originCity"
                onChange={this.handleChange}
                placeholder="User's City"
                />
                <input 
                type="number"
                name="age"
                onChange={this.handleChange}
                placeholder="User's Age"
                />
                <input 
                type="text"
                name="instagram"
                onChange={this.handleChange}
                placeholder="User's Instagram"
                />
                <input 
                type="text"
                name="favoriteAnime"
                onChange={this.handleChange}
                placeholder="User's Favorite Anime"
                />
                <input 
                type="text"
                name="favoriteFood"
                onChange={this.handleChange}
                placeholder="User's Favorite Food"
                />
                <input type="submit" value="Add User" />
            </form>
        )
    }
}



export default AddUserForm;

/*
        this.props.addUser(this.state.newUser)
                const url = "http://localhost:3000/feminaku/user"
        const data = {name: this.state.name}
        fetch(url, 
            {method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .catch(error => console.error('Error', error))
*/