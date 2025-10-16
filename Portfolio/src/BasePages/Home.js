import './Home.css';
import HeroSection from '../Home/HeroSection.js';
import ProjectCard from '../Projects/ProjectCard.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import projectData from '../projects.json';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <Container fluid id="container">
                <Row>
                    <Col>
                        <ProjectCard project={projectData.projects[0]} />
                    </Col>
                    <Col>
                        <ProjectCard project={projectData.projects[1]} />
                    </Col>
                    <Col>
                        <ProjectCard project={projectData.projects[2]} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}