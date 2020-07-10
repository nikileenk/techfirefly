import React, { Component } from 'react';
import NavBar from './NavBar'
import { Container,Form,Row,Col,Button } from 'react-bootstrap';
import Sortimg from './Sortimg'

export default class Home extends Component {

    state={
        searchKey:"Mountain"
    }

    handleChange = (e) =>{
        this.setState({searchKey:e.target.value})
       
    }

    changeClick = (e) =>{
     
        this.setState({searchKey:e.target.value})
    }

    render() {
        return (
            <>
            <Container>
            <NavBar/>

            
            
           <br/>

            <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Search Here" onChange={this.handleChange}/>
            </Form.Group>

            <br/>

            <Row>
                <Col style={{textAlign:"center"}}>
                    <Button variant="dark" onClick={this.changeClick} value="Mountain">Mountain</Button>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <Button variant="dark" onClick={this.changeClick} value="Beaches">Beaches</Button>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <Button variant="dark" onClick={this.changeClick} value="Birds">Birds</Button>
                </Col>
                <Col style={{textAlign:"center"}}>
                    <Button variant="dark" onClick={this.changeClick} value="Food">Food</Button
                ></Col>
               
            </Row>
            <br/>

            <Sortimg ikey={this.state.searchKey}/>
            </Container>

            </>
        )
    }
}
