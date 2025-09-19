import './Home.css';
import HeroSection from '../Home/HeroSection.js';
import ProjectCard from '../Projects/ProjectCard.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Home() {
    let project1 = {
        "name": "Flappy Fish",
        "image": "FlappyFish.png",
        "skills": ["Godot", "Game Development"],
        "projectURLs": {
            "github": "https://github.com/NSCarter/Flappy-Fish",
            "itchio": "https://nscarter.itch.io/flappy-fish"
        }
    }

    let project2 = {
        "name": "Pong",
        "image": "Pong.png",
        "skills": ["Godot", "Game Development"],
        "projectURLs": {
            "github": "https://github.com/NSCarter/Pong",
            "itchio": "https://nscarter.itch.io/pong"
        }
    }

    let project3 = {
        "name": "Estate Agents Website",
        "image": "EstateAgents.jpg",
        "skills": ["React JS", "Rest", "Web API", "Javascript"],
        "text": "In my final year of university I took a module in web API development. For this module I had to create a Node based RESTful API with a React JS single page application frontend. I chose to create a real estate listings web app. The site allowed users to search for and view properties, filter by keywords and send a message to the eastate agents. The site also allowed estate agents to sign in or register to the site, which then allows them to add new or update existing properties and access any messages sent to them by the general public.\n\nThe video below shows the website and demostrates all of its functionality.",
        "video": "EstateAgents.mp4"
    }

    return (
        <div>
            <HeroSection />
            <Container fluid id="container">
                <Row>
                    <Col>
                        <ProjectCard project={project1} />
                    </Col>
                    <Col>
                        <ProjectCard project={project2} />
                    </Col>
                    <Col>
                        <ProjectCard project={project3} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}