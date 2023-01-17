import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

function greeting() {
	var date = new Date().getHours();
	if(date >= 0 && date < 6) {
		return (
			<>
				É madrugada, vá dormir!
			</>
		)
	} else if (date >= 6 && date < 12) {
		return (
			<>
				Bom dia!
			</>
		)
	} else if (date >= 12 && date < 18) {
		return (
			<>
				Boa tarde!
			</>
		)
	} else {
		return (
			<>
				Boa noite!
			</>
		)
	}
}

function OffcanvasNavbar() {

    return (
		<>
		{[false].map((expand) => (
			<Navbar key={expand} bg="light" expand={expand} className="mb-3">
				<Container fluid>
					<Navbar.Brand href="">Development Mode</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${expand}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
					placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								{greeting()}
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="primary">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		))}
		</>
	);
}

export default OffcanvasNavbar;