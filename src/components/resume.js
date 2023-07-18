import React from 'react';
import { Container, Card} from 'react-bootstrap';
import resume from '../img/resume.pdf';

const Resume = () => {
  return (
    <Container fluid className="vh-100">
      <div className="d-flex justify-content-center">
        <Card className="w-25">
          <Card.Body>
            <Card.Title>Download Resume:</Card.Title>
          </Card.Body>
          <Card.Footer className="text-center">
          <a href={resume}>Resume</a>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};

export default Resume;