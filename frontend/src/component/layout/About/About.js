import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
    const visitInstagram = () => {
        window.location = "https://www.instagram.com/this.is_gaurav.gupta";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/dtx9pilve/image/upload/v1688313968/IMG_5737-fotor-bg-remover-20230315212515_b6asdf.jpg"
                            alt="Founder"
                        />
                        <Typography>Gaurav Gupta</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit Instagram
                        </Button>
                        <span>
                            This is a MERN STACK website made by Gaurav Gupta. Only with the
                            purpose project work for showing my skills.
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href="https://www.linkedin.com/in/gupta4gaurav"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon className="LinkedInSvgIcon" />
                        </a>

                        <a
                            href="https://github.com/gupta4gaurav/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon className="GitHubSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
