import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselInMain from '../../components/Main/CarouselInMain'
import '../../App.css';


export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#12233c', color: '#fff' }}>
      <Container className="py-3" style={{ maxWidth: '800px' }}>
        <Row className="justify-content-between align-items-center">
          <Col sm={4}>
            Sponsored by :
            <CarouselInMain />
          </Col>
          <Col sm={6}>
            <h5>Blogify :</h5>
            <div className='footerblogify'>
              <p style={{padding:"25px"}}>Blogify is a social media platform for sharing posts, engaging in discussions,
                and fostering a supportive community for self-expression and creativity.</p>
            </div>
          </Col>
          <Col sm={2}>
            <h5 >Sources :</h5>
            <ul className="list-unstyled" >
              <li><a href="https://newsapi.org/">NewsAPI </a></li>
              <li><a href="https://coolors.co/">Coolors</a></li>
              <li><a href="https://openai.com/">OpenAI</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; {new Date().getFullYear()} Blogify. All rights reserved.</p>
      </Container>
    </footer>
  );
}
