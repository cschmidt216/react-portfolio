import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import meImg from '../img/image6.jpeg';

const About = () => {
  return (
    <Container fluid className="vh-100 bkgrd">
      <Row className="d-flex justify-content-center flex-column flex-sm-row">
        <Col className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
          <Card.Img variant="top" className="img-fluid rounded" src={meImg} />
        </Col>

        <Col className="order-sm-1 my-4 card-text mx-auto mx-sm-0">
          <Card border="dark">
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
              Hello, I go by Chris and I am a full-stack web developer currently receiving my certificate from Case Western Reserve Universitys’ coding bootcamp.  I come from a lifetime of being fascinated with technology, and although initially I chose to pursue the arts, (more specifically music composition and piano performance) I have now decided to pivot towards a career towards the tech world in the hopes of building a stable and profitable career.  As a kid who somehow grew up enjoying math, coding offers a similar logical challenge to be solved that I find to be rewarding and occasionally insightful towards how technology I already know functions.  Although I am still a novice, I find the most drive when working on mainly Javascript, as I grew up fiddling with video games built in Java so the syntax is very familiar to me (although I am well aware of the differences between the two!), and I do not enjoy designing the web page a user would be presented with.  I wouldn’t say there is any sort of dream project I’d be passionate about working on, I think passion is a lousy motivator and find more reward from completing whatever challenge I may be presented with.  If it wasn't apparent as well, dogs and other animals are a huge part of my life and I was planning to pursue a veterinary career before settling on web development.  My dog pictured above was a rescue with serious behavioral issues, and working with her so she can coexist with people again has been a hugely rewarding process.  Thank you for your time and I hope to have much more exciting things to show off here in the future!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;