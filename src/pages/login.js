import React, { useState } from 'react';
import { Col, Card, Form, Button } from 'react-bootstrap';
import { mockUsersDAO } from '../components/mockDAO';
import LandHeader from '../components/loginheader';
import HomePage from './home';
import '../css/styles.css';

export default function Login() {
    //Set variables
    const [userallowed, setUserallowed] = useState(false);
    const [flag, setFlag] = useState(false);
    const [errmsg, setErrmsg] = useState('');
    const [users] = useState(mockUsersDAO.users);
    const [username, setUsername ] = useState('');
    const [userpwd, setUserpwd ] = useState('');
    const [company] = useState('Mock Company');
    const [wrongChar, setWrongchar ] = useState(false);
    //Functions
    function handleSubmit(){
        //Validate User
        if(users[0].username.match(username) && users[0].userpwd.match(userpwd)){
            alert('Loggin on User');
            setUserallowed(true);
        }else{
            alert('Username or Password is invalid. Try again.');
            setUserallowed(false);
            window.location.reload();
        }
    };
    function handleUserChange(e){
        let target = e.target;
        setUsername(target.value);
    };
    function handlePwdChange(e){
        let target = e.target;
        setUserpwd(target.value);
    };
    function handleCheckUser(){
        //Validate
        if(username.length > 0 && username.length < 8){
            setFlag(true);
            setTimeout(() => {
                setErrmsg('Username must have at least 8 characters of length');
            }, 1000);
            setTimeout(() => {
                setFlag(false);
                setErrmsg('');
                setUsername('');
            }, 3000);
        }else if(wrongChar){
            alert('Special characters not allowed');
            setWrongchar(false);
        }
    };
    function handleCheckPwd(){
        //Validate
        if(userpwd.length > 0 && userpwd.length < 8){
            setFlag(true);
            setTimeout(() => {
                setErrmsg('Password must have at least 8 characters of length');
            }, 1000);
            setTimeout(() => {
                setFlag(false);
                setErrmsg('');
                setUserpwd('');
            }, 3000);
        }
    }
    //Render
    return(
        <>
        {
            userallowed ? <HomePage company={company} user={users[0]}/>
            : 
            <div id="container" className="App-header">
                <LandHeader company={company}/>
                <section className="login-board">
                    <Card border="secondary" bg="light" text="dark" style={{ width: '25rem', borderRadius:'30px' }} className="text-center">
                        <Card.Header as="h1">Login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasic1">
                                        <Form.Control 
                                            type="text"
                                            placeholder="Username"
                                            maxLength="20"
                                            name="user"
                                            value={username}
                                            onChange={handleUserChange}
                                            onBlur={handleCheckUser}
                                            autoComplete="off"
                                            className="sombra"
                                            required
                                        />
                                    </Form.Group>     
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasic2">
                                    <Form.Control 
                                            type="password"
                                            placeholder="Password"
                                            maxLength="20"
                                            name="password"
                                            value={userpwd}
                                            onChange={handlePwdChange}
                                            onBlur={handleCheckPwd}
                                            autoComplete="off"
                                            className="sombra"
                                            required
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Button 
                                    variant="primary"
                                    size="md"
                                    type ="submit"
                                    className="button"
                                    disabled={flag}>Enter
                                </Button>
                            </Form>
                        </Card.Body>
                        {
                            flag ? <Card.Footer className="loginerror">{errmsg}</Card.Footer> : ''
                        }
                    </Card>
                </section>
            </div>
        }
        </>
    )
}