import React, { Component } from 'react';
import './Projects.css';
import { Card, Paper, Grid, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PROJECTS } from '../../resources/list_of_projects';

class Projects extends Component {
    render() {
        return (
            <div className="projects-component">
                <Paper className="projects-paper">
                    <Grid container spacing={9} justify="space-evenly" alignItems="center">
                        {PROJECTS.map((project) => {
                            return (
                                <Grid item key={project.name}>
                                    <Card>
                                        <CardActionArea href={project.link} target={project.name !== "Javascript 30" ? "_blank" : ''}>
                                            <CardMedia
                                                className="card-media"
                                                image={project.pic}
                                                title={project.name}
                                            />
                                            <CardContent className="card-content">
                                                <div className="proj-title">
                                                    {project.name}
                                                </div>
                                                <div>
                                                    {project.description.map((desc) => {
                                                        return <p>{desc}</p>
                                                    })}
                                                </div>
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

export default Projects