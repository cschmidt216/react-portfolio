import React from 'react';
import { Container, Card } from 'react-bootstrap';

import bookImg from '../img/book.it.png';
import dayImg from '../img/perfectday.png';

const Portfolio = () => {
  return (
    <Container fluid className="h-100 pb-4 bkgrd">
      {/* Project 1 */}
      <Card className="mb-3">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Card.Img variant="top" className="img-thumbnail" src={bookImg} />
          </div>
          <div className="col-12 col-md-8">
            <Card.Body>
              <Card.Title>Book.it</Card.Title>
              <Card.Text>
                A web app for searching for books and saving them to a list.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link href='https://github.com/codemodeactivate/book-it'>Repository link</Card.Link>
              <Card.Link href='https://codemodeactivate.github.io/book-it/#'>Deployed app</Card.Link>
            </Card.Footer>
          </div>
        </div>
      </Card>

      {/* Project 2 */}
      <Card className="mb-3">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Card.Img variant="top" className="img-thumbnail" src={dayImg} />
          </div>
          <div className="col-12 col-md-8">
            <Card.Body>
              <Card.Title>Perfect Day Planner</Card.Title>
              <Card.Text>
                Plan out the perfect day for your partner and send it to them.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link href='https://github.com/codemodeactivate/perfect-day-planner'>Repository link</Card.Link>
              <Card.Link href='https://perfect-day.herokuapp.com'>Deployed app</Card.Link>
            </Card.Footer>
          </div>
        </div>
      </Card>

      {/* Project 3 (Placeholder) */}
      <Card className="mb-3">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Card.Img variant="top" className="img-thumbnail" src={"http://via.placeholder.com/500x500"} />
          </div>
          <div className="col-12 col-md-8">
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Placeholder text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link href=''>Repository link</Card.Link>
              <Card.Link href=''>Deployed app</Card.Link>
            </Card.Footer>
          </div>
        </div>
      </Card>

      {/* Project 4 (Placeholder) */}
      <Card className="mb-3">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Card.Img variant="top" className="img-thumbnail" src={"http://via.placeholder.com/500x500"} />
          </div>
          <div className="col-12 col-md-8">
            <Card.Body>
              <Card.Title>Project 4</Card.Title>
              <Card.Text>
                Placeholder text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link href=''>Repository link</Card.Link>
              <Card.Link href=''>Deployed app</Card.Link>
            </Card.Footer>
          </div>
        </div>
      </Card>

      {/* Project 5 (Placeholder) */}
      <Card className="mb-3">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Card.Img variant="top" className="img-thumbnail" src={"http://via.placeholder.com/500x500"} />
          </div>
          <div className="col-12 col-md-8">
            <Card.Body>
              <Card.Title>Project 5</Card.Title>
              <Card.Text>
                Placeholder text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link href=''>Repository link</Card.Link>
              <Card.Link href=''>Deployed app</Card.Link>
            </Card.Footer>
          </div>
        </div>
      </Card>

      {/* Project 6 (Placeholder) */}
      <Card className="mb-3">
        <div className="row no-gutters">
          <div className="col-12 col-md-4">
            <Card.Img variant="top" className="img-thumbnail" src={"http://via.placeholder.com/500x500"} />
          </div>
          <div className="col-12 col-md-8">
            <Card.Body>
              <Card.Title>Project 6</Card.Title>
              <Card.Text>
                Placeholder text
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Card.Link href=''>Repository link</Card.Link>
              <Card.Link href=''>Deployed app</Card.Link>
            </Card.Footer>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Portfolio;