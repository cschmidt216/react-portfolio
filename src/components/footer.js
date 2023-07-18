import React from 'react';
import { Container } from 'react-bootstrap';
import { Icon } from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiTwitter } from '@mdi/js';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <Container className="p-4 d-flex flex-column align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} fluid>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/chris-schmidt-804010282/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <Icon path={mdiLinkedin} size={2} />
          </a>
          <a
            href="https://github.com/cschmidt216"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <Icon path={mdiGithub} size={2} />
          </a>
          <a
            href="https://twitter.com/drainyhearts"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <Icon path={mdiTwitter} size={2} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;