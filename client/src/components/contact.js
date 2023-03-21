import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact(){
    return(
        <div id='contact'>
            <h1 className="port-header">Get in Contact with Me!</h1>
            <div className='form'>
            <Container>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="password" placeholder="Type Message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
    </Container>
    </div>
        </div>
    );
}

export default Contact;