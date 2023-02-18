import {Button,Container,Form,Nav,Navbar,NavDropdown,Offcanvas } from 'react-bootstrap';



const NavigationBar = () => {
    const logo = "/assets/logoo2.png"
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};
export default NavigationBar;