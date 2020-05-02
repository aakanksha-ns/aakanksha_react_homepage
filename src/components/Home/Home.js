import React from 'react';
import { Grid } from '@material-ui/core';
import './Home.css';
import { SocialIcon } from 'react-social-icons';

var ReactRotatingText = require('react-rotating-text');

export default function Home() {

    const isMobile = window.innerWidth <= 1000;

    return (
        <div className="home-component">
            <Grid container spacing={0}>
                <Grid item xs={12} lg={6}>
                    <div className="paper">
                        <div className="paper-content">
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <div className='about-text' style={isMobile ? {
                                        height: window.innerHeight - 88,
                                        paddingTop: window.innerHeight / 4
                                    } : {}}>
                                        <div className='tint' style={isMobile ? {
                                            height: window.innerHeight - 88,
                                            paddingTop: window.innerHeight / 4
                                        } : {}}>
                                            I am <span>
                                                <ReactRotatingText
                                                    items={[' Aakanksha NS', ' a Data Scientist', ' a Software Engineer', ' a Web Developer']} /> </span>
                                        </div>
                                    </div>
                                </Grid>
                                {isMobile && <Grid item xs={12} sm={0}>
                                    <div className="about-photo-wrapper">
                                        <img className="about-photo"
                                            src={require('./../../resources/aakanksha_pic.jpeg')} />
                                    </div>
                                </Grid>}
                                <Grid item xs={12}>
                                    <div className='description'>
                                        Hi, I'm Aakanksha, a graduate student pursuing my Masters in Data Science at <a
                                            href="https://www.usfca.edu/" target="_blank">University of San Francisco</a>.
                                        <br></br>
                                        <br></br>
                                        I'm also a data science intern at Zyper (YCombinator '18) where I'm working on projects based on Computer Vision and Natural Language Processing. I worked as a software developer at JP Morgan Chase for two years after
                                        graduating from National Institute of Technology, Calicut.
                                        I enjoy data science, competitive coding and web development. I'm also a technical writer for various publications like Towards Data Science, Analytics Vidhya, etc. Check out my
                                        projects to know more about my work.
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className="icons-wrapper">
                                        <Grid container direction="row" justify="center" alignItems="center"
                                            spacing={5}>
                                            <Grid item>
                                                <SocialIcon url="https://github.com/aakanksha-ns" target="blank"
                                                    style={{ height: 70, width: 70 }} />
                                            </Grid>
                                            <Grid item>
                                                <SocialIcon url="https://medium.com/@aakanksha.ns" target="blank"
                                                    style={{ height: 70, width: 70 }} />
                                            </Grid>
                                            <Grid item>
                                                <SocialIcon url="https://www.linkedin.com/in/aakanksha-ns/"
                                                    target="blank" style={{ height: 70, width: 70 }} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}