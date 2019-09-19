import React from 'react'
import Card from 'react-bootstrap/Card';
import Geometric from './images2/HW97Y94.jpg'
import Layout from './Layout.js'

class About extends React.Component {
    render() {
        return (
            <Card className="bg-dark text-white">
                <Card.Img src={Geometric} alt="Purple-flowers-img" />
                <Card.ImgOverlay>
                    <Layout>
                    <Card.Title>About</Card.Title>
                    
                    <Card.Text>
                        We are a company!
                    </Card.Text>
                    </Layout>
                </Card.ImgOverlay>
            </Card>
        )
    }
    
}

export default About;