import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Home from './BasePages/Home.js';
import AllProjects from './BasePages/AllProjects.js';
import About from './BasePages/About.js';
import Contact from './BasePages/Contact.js';

export default function Navigation() {
    return (
        <Router>
            <Navbar bg='light'>
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