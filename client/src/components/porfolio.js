import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import stockphoto from "./images/techstock1.jpeg";
import enlightapp from "./images/logo.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="port-header">
        <h1>2023 Portfilio</h1>
        <a className="github" href="https://www.github.com/chinwe2020">
          - Github
        </a>
      </div>
      <Container>
        <div className="projects">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="card_image" variant="top" src={enlightapp} />
            <Card.Body>
              <Card.Title>Enlightapp</Card.Title>
              <Card.Text>
                Enlightapp makes understanding each student and their community
                fast, easy and fun!
              </Card.Text>
              <Button variant="primary">
                <a className="button" href="https://enlightapp.co">
                  View
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={stockphoto} />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Coming Soon</Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={stockphoto} />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>Coming Soon</Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
