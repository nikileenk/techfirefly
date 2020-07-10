import React, { Component } from 'react';
import { Button,Form, Container } from 'react-bootstrap';
import './CompStyle.css';

const validName = RegExp(/([a-zA-Z0-9_-]){8,50}/);

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const validPass = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            password: '',
            valid:false,
            error:''
        }
    }

    

    login() {
        if(validName.test(this.state.name)){
            this.setState({valid:true,error:""})
            if(validEmailRegex.test(this.state.email)){
                this.setState({valid:true,error:""})

                if(validPass.test(this.state.password)){
                    this.setState({valid:true,error:""})
                }

                else{
                    this.setState({error:"Invalid Password",valid:false})
                    
                }

            
            }
            else{
                this.setState({error:"Invalid Email Address",valid:false})
            }
        }

        else{
            this.setState({error:"Invalid Name",valid:false})
        }
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                this.setState({valid:true,error:""})

               
                if (resp.length > 0) {
                    this.setState({valid:true,error:""})
                    if(resp[0].email === this.state.email){

                        this.setState({valid:true,error:""});

                        if(resp[0].password === this.state.password){
                        localStorage.setItem('login',JSON.stringify(resp))
                        console.warn(this.props.history.push('/'))
                        }

                        else{
                            this.setState({error:"Invalid password, NOT in Database",valid:false})
                            
                        }
                    }
                   
                   
                    else{
                        this.setState({error:"Invalid Email, NOT in Database",valid:false})
                       
                    }
                   
                }
                else {
                    this.setState({error:"Invalid Name, NOT in Database",valid:false})
                   
                }

            })
        })
    }
    render() {
        return (
            <div>
                 <Container>
           
                <br/><br/>
                   <div className="login">
                       <h3>Firefly App</h3><br/>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="Text" placeholder="enter name" name="user" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name} required/>
                    </Form.Group>
                

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="email" placeholder="enter email" name="email" onChange={(event) => this.setState({ email: event.target.value })} value={this.state.email} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPass">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="text" placeholder="enter password" name="password" onChange={(event) => this.setState({ password: event.target.value })}value={this.state.password} required/>
                    </Form.Group>
            

                    <Button variant="primary" onClick={() => { this.login() }}>
                        Login
                    </Button>
                    <br/><br/>
                    <h6 style={{color:"red"}}>{this.state.error}</h6>
                    
                    <p>NOTE: Please Check JSON API Server is Started</p>
                    
                    <p style={{fontSize:"15px"}}>CREDENTIALS -<br/> NAME: admin123<br/>EMAIL: test@gmail.com<br/>PASSWORD: admin@123</p>
                    </div>
                    </Container>

            </div>
        );
    }
}

export default Login;