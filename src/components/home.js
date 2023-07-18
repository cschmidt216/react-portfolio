import React from 'react';
import { Container } from 'react-bootstrap';
import tinImg from '../img/image0.jpeg';

const Home = () => {
  const contentStyle = {
    borderRadius: '50%', // Adding a border-radius to make the content circular
    maxWidth: '400px', // Increase the max width to make the circular content larger
    margin: '0 auto', // Centering the circular content horizontally
    padding: '20px', // Adding some padding to the circular content
    background: 'rgba(255, 255, 255, 0.8)', // Adding a semi-transparent background to the circular content
  };

  return (
    <Container fluid className="text-center vh-100 d-flex justify-content-center align-items-center">
      <div className="pt-2" style={contentStyle}>
        <img className="img-fluid rounded-circle" src={tinImg} alt='' style={{ width: '100%', height: 'auto' }} />
        <p className="my-0 py-0 text-dark fs-1">Welcome to my portfolio.</p>
      </div>
    </Container>
  );
};

export default Home;