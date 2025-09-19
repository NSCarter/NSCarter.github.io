import "./ProjectCard.css"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FaItchIo, FaGithub } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

function Github({ urls }) {
    if (urls) {
        if (urls.github) {
            return <Card.Link href={urls.github} target="_blank" className="float-end" id="card-link"><FaGithub size={50} color="black" /></Card.Link>
        }
    }
    return
}

function Itch({ urls }) {
    if (urls) {
        if (urls.itchio) {
            return <Card.Link href={urls.itchio} target="_blank" className="float-end" id="card-link"><FaItchIo size={50} color="#f35959" /></Card.Link>
        }
    }
    return
}

function MoreInfo({ text }) {
    if (text) {
        return <Card.Link href="" className="float-end" id="card-link"><FaInfoCircle size={50} color="black" /></Card.Link>
    }
    return
}

function Skills({ skills }) {
    const listItems = skills.map(skill => <li>{skill}</li>)
    return <Card.Text>{listItems}</Card.Text>
}

export default function ProjectCard({project}) {
    return (
        <Card>
            <Card.Img id="card-img" variant='top' src={project.image} className="img-fluid" />
            <Card.Body>
                <Container>
                    <Row>
                        <Card.Title style={{paddingLeft: 30, paddingTop: 5}}>{project.name}</Card.Title>
                    </Row>
                    <hr />
                    <Row>
                        <Col style={{paddingLeft: 30}}>
                            <Skills skills={project.skills}/>
                        </Col>
                        <Col>
                            <MoreInfo text={project.text} />
                            <Itch urls={project.projectURLs}/>
                            <Github urls={project.projectURLs}/>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}