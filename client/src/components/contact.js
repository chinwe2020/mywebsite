import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

function Contact() {
  const [emailAddress, setEmailAddress] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { emailAddress, emailMessage };
      const response = await fetch(
        "https://mywebsitedbinstance.ci7w7zqvgwf7.us-east-2.rds.amazonaws.com",
        {
          method: "Post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      console.log(response);
      // Set the success message and clear the form inputs
      setEmailAddress("");
      setEmailMessage("");
      setSubmissionSuccess(true); // set the state variable to true if the submission was successful
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div id="contact">
      <h1 className="port-header">Get in Contact with Me!</h1>
      <div className="form">
        <Container>
          <Form onSubmit={onSubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email address<em style={{ color: "red" }}>*</em>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Message<em style={{ color: "red" }}>*</em>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type Message"
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
                maxLength={700}
                required
              />
              <div className="text-muted">
                {emailMessage.length}/700 characters
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
            {submissionSuccess && (
              <div style={{ color: "green", marginTop: "10px" }}>
                Your message has been received!
              </div>
            )}
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
