import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgImg01 from '../../../images/bg01.jpg';
import bgImg02 from '../../../images/bg02.png';
import bgImg03 from '../../../images/bg03.jpg';
const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={bgImg01}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={bgImg02}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bgImg03}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;