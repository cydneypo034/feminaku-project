import React from 'react';
import {Form, Row, Col, FormGroup, Button} from 'react-bootstrap';
import Axios from 'axios';
//for search bar, the state is getting updated with a new word/letter.
//need to set the initial state with whatever the user will be querying.
//do I need to make another router that will query for the search bar?
//not really because I made the api and routers already, I need to just find a way to have the user search for
//one id in the database based on them typing.

//since the state will be changing i need to add that into a class
//need to make a lifecycle method that will be grabbing the 

class SearchForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            queryUser: []
        };
    }

    handleSearchChange = (ev) => {
        ev.preventDefault();
        const {value} = ev.target;
        console.log('Value', value)
        this.setState({
            queryUser: value
        });
        this.searchSubmit(value);
    }

    searchSubmit = (query) => {
        Axios.get('http://localhost:3000/api/users')
        .then(res => console.log(res.data))
    };

    componentDidMount() {
        this.searchSubmit("");
    }

    render() {
        return (
            <div>
                <Form>
                    <Row>
                        <Col>
                        <FormGroup className="SearchBar"  />
                        <input onChange={this.handleSearchChange} type="search" name="exampleSearch" placeholder="Search" />
                        <Button type="submit" value="Search" onSubmit={this.searchSubmit}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default SearchForm;

