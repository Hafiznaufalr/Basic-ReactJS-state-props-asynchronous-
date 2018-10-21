import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Data from './Data';
import './App.css';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import img from './kun.png';
import TextField from '@material-ui/core/TextField';


export default class LoginPage extends Component {
    constructor() {
        super();

    }


    render() {
        return (

            <Router>
                <div class="container">
                    <Route path="/" exact render={
                        () => {
                            return (


                                <div className="box">
                                    <form>
                                    <Avatar id="avatar"
                                        alt="Adelle Charles"
                                        src={img}
                                    />
                                   
                                    <h1 >Login</h1>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        margin="normal"
                                        variant="outlined"
                                    ></TextField>
                                    <TextField
                                        required
                                        type="password"
                                        id="outlined-requiredd"
                                        label="Password"
                                        margin="normal"
                                        variant="outlined"
                                    >
                                    </TextField>
                                    <br />
                                    <br />
                                    <NavLink id="link" to="/sign-in"> <Button variant="contained" color="primary">
                                        Log In
                                    </Button>
                                    </NavLink>
                                    </form>
                                </div>
                            );
                        }
                    } />

                    <Route exact path="/sign-in" component={Data}>
                    </Route>
                </div>

            </Router>


        );
    }


}