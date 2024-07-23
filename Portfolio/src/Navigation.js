import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Home from './BasePages/Home.js';
import AllProjects from './BasePages/AllProjects.js';
import About from './BasePages/About.js';
import Contact from './BasePages/Contact.js';

export default function Navigation() {
    return (
        <Router>
            <Navbar bg='light' style={{paddingRight: 25, paddingLeft: 25}}>
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">
                        <h1>Niamh Carter</h1>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link as={Link} to='all-projects'>
                            All Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to='about'>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to='contact'>
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Nav className='ms-auto' style={{paddingRight: 30}}>
                        <Nav.Link href='https://github.com/NSCarter' target='_blank'>
                            <FaGithub size={30} />
                        </Nav.Link>
                        <Nav.Link href='https://www.linkedin.com/in/niamh-carter/' target='_blank'>
                            <FaLinkedin size={30} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Routes>
                    <Route path='/' element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path='/all-projects' element={<AllProjects />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}