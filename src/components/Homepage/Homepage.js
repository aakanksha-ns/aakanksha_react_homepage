import React, { Component } from "react";
import Home from "../Home/Home"
import './Homepage.css';
import Navbar from '../Navbar/Navbar'
import Grid from '@material-ui/core/Grid';

class Homepage extends Component {
    render() {
        return (
            < Grid container >
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <div>
                    <Home />
                </div>
            </Grid >
        )
    }
}

export default Homepage;
