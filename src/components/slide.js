import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export function Slider() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://imageio.forbes.com/specials-images/dam/imageserve/913219882/960x0.jpg" 
                alt="First slide"
                style={{height:'700px',object:'cover' }}
              />
              <Carousel.Caption>
                <h3>Statistics</h3>
                <p className="d-none d-sm-block">
                  "Track how many clicks your links are generating, and all of this without paying a penny"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 "
                src="https://s3.wns.com/S3_5/Images/GenericHeaderBanner/MobileImg/19087/3093/Security-TRAC-Mobile-568x568px.jpg"
                alt="Second slide"
                style={{height:'700px',object:'cover' }}
              />

              <Carousel.Caption>
                <h3>Security</h3>
                <p className="d-none d-sm-block">
                Security is a priority. HTTPS and Firewall are just a few of the many mechanisms we have
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://logos-world.net/wp-content/uploads/2020/10/Free-Logo.png"
                alt="Third slide"
                style={{height:'700px',object:'cover' }}
              />

              <Carousel.Caption>
                <h3>Free</h3>
                <p className="d-none d-sm-block">
                Our service is 100% free. Create as many links as you want, and also track statistics for each link
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Best Reasons for Using Short Url</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </Container>
  );
}