import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {CartWidget} from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">Arrumacos</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Tienda</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Deco&Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Juguetería</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ropa</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Iniciar Sesión</Nav.Link>
                        <Nav.Link href="#deets"><CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default NavBar
