import { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
 function Cardd({img,desc,title}) {
  return (
    <Card style={{ width: '18rem',height:'425px' }} className='m-3'>
       
        <Card.Img variant="top" src={img} style={{height:'250px',object:'cover' }} />
     
     
      <Card.Body>
        <div className="text-center">
            <h1>
            <Card.Title>{title}</Card.Title>
            </h1>
        </div>
        <Card.Text>
         {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export function Menu(){
  
    return(
        <div>
             <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
          10 reasons to use our services
          </h3>
        </div>
        <Row>
              <Col md={6} lg={4}>
                <Cardd  title="Statistics" img="https://imageio.forbes.com/specials-images/dam/imageserve/913219882/960x0.jpg" desc="Track how many clicks your links are generating, and all of this without paying a penny"/>
              </Col>
              <Col md={6} lg={4}>
              <Cardd title="Free" img="https://logos-world.net/wp-content/uploads/2020/10/Free-Logo.png" desc="Our service is 100% free. Create as many links as you want, and also track statistics for each link"/>
              </Col>
              <Col md={6} lg={4}>
              <Cardd  title="Security" img="https://s3.wns.com/S3_5/Images/GenericHeaderBanner/MobileImg/19087/3093/Security-TRAC-Mobile-568x568px.jpg" desc=" Security is a priority. HTTPS and Firewall are just a few of the many mechanisms we have"/>
              </Col>
             <Col md={6} lg={4}>
             <Cardd title="Short Url" img="https://free-url-shortener.rb.gy/url-shortener.png" desc="Extremely short URLs, we have the shortest shortened URL in the market, using only 7 characters"/>
             </Col>
             <Col md={6} lg={4}>
             <Cardd  title="Free Dev Api" img="https://qph.cf2.quoracdn.net/main-qimg-999b788fcdd27ea1768c5d57f96b8e33-pjlq" desc="We provide an extremely uncomplicated REST API, allowing you to integrate your applications in just a few minutes"/>
             </Col>
             <Col md={6} lg={4}>
             <Cardd  title="Auto Scalaple" img="https://media.graphassets.com/AlOkB7lQIiWghXsJPhyH" desc="Our serverless infrastructure is hosted in the cloud (AWS). We guarantee an availability rate of 99.99%"/>
             </Col>       
        </Row>
      </Container>
        </div>
    )
}