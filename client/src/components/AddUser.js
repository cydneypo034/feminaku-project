import React from 'react';

class AddUserForm extends React.Component {

    state = {
    newPerson: {
        name: " ",
        originCity: " ",
        age: 0,
        instagram: " ",
        favoriteAnime: " ",
        favoriteFood: " "
    }
}

    handleChange = (evnt) => {
        let newPerson = {...this.state.newPerson}
        newPerson[evnt.target.name] = evnt.target.value
        this.setState({ newPerson })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();

        this.props.addPerson(this.state.newPerson)

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

class App2 extends React.Component {

    render() {
        return (
        <div>
        <AddUserForm addPerson={this.addPerson}/> 
        </div>     
        )
    }
}


export default App2;

/*
state = {
        newPerson: {
            name: " ",
            originCity: " ",
            age: 0,
            instagram: " ",
            favoriteAnime: " ",
            favoriteFood: " "
        }
    }
    componentDidMount() {
        this.getUserFromServer()
    }

    getUserFromServer = () => {
        fetch('/api/users')
        .then(res => res.json())
        .then(userServers => {
            this.setUser(userServers)
        })
    }

    sendUsertoServer = (newUser) => {
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {'Content-Type': 'application/json'}
        }).then(() => this.getUserFromServer())
    }

    addUser = (userNew) => {
        let attach = {...this.state.attach}

        attach.newPerson.push(userNew)

        this.setState({ attach })
    }



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