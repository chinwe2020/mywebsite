import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import stockphoto from './images/techstock1.jpeg';

function Blog(){
    return(
        <div>
            <h1 className="port-header">Blog/Interests/Related Articles</h1>
            <Container>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={stockphoto}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Blog</h3>
          <p>Coming Soon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={stockphoto}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Interest</h3>
          <p>Coming Soon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={stockphoto}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third Article</h3>
          <p>
            Coming Soon
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
        </div>
    )
}

export default Blog;