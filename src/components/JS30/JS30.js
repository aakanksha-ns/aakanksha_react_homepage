import React, { Component } from 'react';
import './JS30.css';
import {JS30_PROJECTS} from '../../resources/list_of_projects';
import { Card, Paper, Grid, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

class JS30 extends Component{
    render() {
        return(
            <div className="projects-component">
                <Paper className="projects-paper">
                    <Grid container spacing={9} justify="space-evenly" alignItems="center">
                        {JS30_PROJECTS.map((project) => {
                            return (
                                <Grid item key={project.name} className="js30-card">
                                    <Card>
                                        <CardActionArea href={project.link} target='_blank'>
                                            <CardMedia
                                                className="card-media"
                                                image={project.pic}
                                                title={project.name}
                                            />
                                            <CardContent className="card-content">
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {project.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default JS30