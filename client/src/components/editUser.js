import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import PurpleSunset from './images2/maxresdefault.jpg';


class editUser extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeCityAndState = this.onChangeCityAndState.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)
        this.onChangeSocialMedia = this.onChangeSocialMedia.bind(this)

        this.state = {
            name: ' ',
            cityAndState: ' ',
            age: 0,
            socialMedia: ' ',
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/api/users/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                name: res.data.name,
                cityAndState: res.data.cityAndState,
                age: res.data.age,
                socialMedia: res.data.socialMedia
            })
        })
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeCityAndState(e) {
        this.setState({
            cityAndState: e.target.value
        })
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }
    onChangeSocialMedia(e) {
        this.setState({
            socialMedia: e.target.value
        })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();

        console.log(`Form submitted:`)
        console.log(`name: ${this.state.name}`)

        //for using axios to grab the data from the api
        const editedUser = {
            name: this.state.name,
            cityAndState: this.state.cityAndState,
            age: this.state.age,
            socialMedia: this.state.socialMedia,
        };
        //for using axios to grab the data from the api
        Axios.put('http://localhost:3000/api/users/' + this.props.match.params.id, editedUser)
            .then(res => console.log(res.data))

        this.props.history.push('/allusers');
    }


    
    render() {
        return (
            <div>
                <img className="about-background-image" src={PurpleSunset} alt="town" width="100%" height="100%"/>
                <h1 className="title-table2">★ Need To Fix Anything? Edit It Here! ★</h1>
                <form className="this-form" onSubmit={this.handleSubmitInput}>
                    <label className="text-class">Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <label className="text-class">City and State</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.cityAndState}
                        onChange={this.onChangeCityAndState}
                    />
                    <label className="text-class">Age</label>
                    <input type="number"
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge}
                    />
                    <label className="text-class">Social Media</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.socialMedia}
                        onChange={this.onChangeSocialMedia}
                    />
                    <br></br>
                    <Button variant="info" type="submit" value="Edit User">Edit Your Info!</Button>
                </form>
            </div>
        )
    }
}

export default editUser;
