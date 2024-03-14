import React from 'react'
import "./Header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




function Header() {
    return (
        <header className='py-4 d-flex align-items-center justify-content-between'>
            <div>
                <div>
                    <img src="https://blogzine.webestica.com/assets/images/logo.svg" alt="" />
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Home" id="basic-nav-dropdown" className='me-3 '>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" id="basic-nav-dropdown" className='me-3'>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Post" id="basic-nav-dropdown" className='me-3'>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Lifestyle" id="basic-nav-dropdown" className='me-3'>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Dashboard</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='d-flex gap-3 align-items-center'>
                    <div className='themeDark'>
                        <FontAwesomeIcon icon={faCircleHalfStroke} style={{ color: 'white' }}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div className=''>
                        <button className='btn btn-danger fw-bold'>Subscribe</button>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header