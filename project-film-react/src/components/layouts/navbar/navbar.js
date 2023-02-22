import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import './navbar.css'


const NavigationBar = () => {
  const search = "./assets/search.png";

  return (
    <>
      <Navbar bg="dark" variant="dark" className='p-3'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/nowPlaying">Now Playing</Nav.Link>
            <Nav.Link href="/upComing" >Up Coming</Nav.Link>
          </Nav>

          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" src={search}>Search</Button>
            {/* <Button className='btnLogin' href="/">LOGIN</Button> */}
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;