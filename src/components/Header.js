
import { Form,Nav, Container, Navbar,Button } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
<div>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


        <Form.Label htmlFor="inputPassword5">First Name:</Form.Label>
  <Form.Control
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
   
  </Form.Text>




<br></br>

<Form.Label htmlFor="inputPassword5">Last Name:</Form.Label>
  <Form.Control
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
   
  </Form.Text>




<br></br>


        <Form.Label htmlFor="inputPassword5">Your E-mail:</Form.Label>
  <Form.Control
    type="text"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
   
  


<br></br>




  <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
<br></br>
  </Form.Text>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</div>
    )

}
export default Header;