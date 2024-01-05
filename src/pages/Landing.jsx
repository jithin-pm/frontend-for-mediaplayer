import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
      <Container className='mt-5 mb-5 '>
        <Row>
          <Col className='mt-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est non, deserunt maiores laboriosam delectus voluptas hic quod dolorem perferendis dolore rerum saepe ab nemo possimus quis! Quam sapiente ab tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis esse facilis ratione assumenda. Nisi, harum temporibus natus deserunt, necessitatibus nesciunt, nulla laudantium ipsam asperiores similique totam quisquam tempore magnam! Non.</p>
            <Link to='/home'><button className='btn btn-warning mt-3'>Get Started  <i class="fa-solid fa-arrow-right"></i></button></Link>
          </Col>

          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" style={{ height: "400px", paddingLeft: "50px" }} />
          </Col>
        </Row>
      </Container>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className='container mt-5 mb-5'>
        <h3>Features</h3>

        <div className='cards d-flex justify-content-evenly align-item-center mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col>
            <h3 className='text-warning  mb-3 '>Simple & Powerful</h3>

            <div>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis asperiores magni accusantium ad nostrum quae laborum, dolores ratione et, quos fugit ullam laudantium corporis. Tenetur, perspiciatis reiciendis?</p>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis asperiores magni accusantium ad nostrum quae laborum, dolores ratione et, quos fugit ullam laudantium corporis. Tenetur, perspiciatis reiciendis?</p>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis asperiores magni accusantium ad nostrum quae laborum, dolores ratione et, quos fugit ullam laudantium corporis. Tenetur, perspiciatis reiciendis?</p>

            </div>
          </Col>

          <Col>
            <iframe className='mt-5 p-3' width="500" height="315" src="https://www.youtube.com/embed/VAdGW7QDJiU?si=KZtBhGkUrjGgea7I" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing