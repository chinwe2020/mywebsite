import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="xxl" bg="dark" variant="dark">
     <Container fluid>
            <Navbar.Brand href="#home">Chinwe' Watkins</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
              restoreFocus={false}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#biography">Biography</Nav.Link>
                  <Nav.Link href='https://docs.google.com/document/d/1qwEQ8PioxFxdDR5ZndmvjIMO3wJyY1nHshZuCKWMZbE/edit?usp=sharing' target="_blank">Resume</Nav.Link>
                  <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
    </Navbar>
  );
}

export default NavBar;