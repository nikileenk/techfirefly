import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import images from './images';

export default class Sortimg extends Component {

    state = {
        ititle:this.props.ikey
    }

    componentDidMount() {
        this.setState({ititle:this.props.ikey})
        console.log(this.props.ikey)
    }
    
    

    render() {
        
        return (
            <>
            {this.props.ikey.toLowerCase() ==="mountain" || this.props.ikey.toLowerCase() ==="birds" || this.props.ikey.toLowerCase() ==="beaches" || this.props.ikey.toLowerCase() ==="food"? 
            <Container>
            <h2 style={{textAlign:"center",margin:"15px 0px"}}>{this.props.ikey} Pictures</h2>
            <Row>
               
            { images.filter(tname => tname.title.toLowerCase() === this.props.ikey.toLowerCase()).map(({id, src, title}) => 
            <Col md={4} key={id}>
            <img key={id} src={src} title={title} alt={title} className="limg"/>
            </Col>
            )}
                
            </Row>
            </Container>
            : <h4 style={{textAlign:"center",padding:"20px 0px"}}>No Search Data Found<br/>
            <p style={{fontSize:"18px",marginTop:"10px",color:"grey"}}>Type Exact Words</p></h4>}
            
            </>
        )
    }
}
