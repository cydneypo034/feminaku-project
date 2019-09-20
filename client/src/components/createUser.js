import React from 'react';

class createUsers extends React.Component {
    
    state = {
        name: ' ',
        originCity: ' ',
        age: 0,
        instagram: ' ',
        favoriteAnime: ' ',
        favoriteFood: ' '
    }

    handleChangeInput = (event) => {
        let newUser = {...this.state.newUser}

        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
    }

    render () {
        return (
            <div>
                <h1>Create Users</h1>
                <form>
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