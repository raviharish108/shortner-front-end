import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Menu } from './card';
import { Slider } from './slide';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
 function Dash({title,value}){
    return(
       <Card style={{ width: '18rem' }} className='m-3 bg-primary'>
      <Card.Body>
        <div className="text-center">
            <h1>
            <Card.Title>{title}</Card.Title>
            </h1>
        </div>
        <Card.Text className="text-center">
        {value}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export function Dashboard(){
  const[urls,seturls]=useState([]);
 const getallurls=async()=>{
  try{
       const response=await axios.get(`https://url-shortner-app-8i7q.onrender.com/api/url/trend`);
       await seturls(response.data);
  }catch(err){
      alert(err.res.data.msg);
  }
 }
 useEffect(()=>{
  getallurls();
 },[]);
 const update=async(id)=>{
  try{
    await axios.put(`https://url-shortner-app-8i7q.onrender.com/api/url/clicks/${id}`)
  }catch(err){
    await console.log(err);
  }
}

    return(
        <div>
            <Container>
                 <div className="text-center">
                       <h3 className="text-primary my-3 py-5">
                            Bussiness Dashboard
                         </h3>
                  </div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Dash title="Customers" value="50000"/>
                    </Col>
                    <Col lg={4} md={6}  sm={12}>
                        <Dash title="Income" value="$78956"/>
                    </Col>
                    <Col lg={4} md={6}  sm={12}>
                        <Dash title="Products Sold" value="$4567"/>
                    </Col>
                </Row>
                <div className="text-center">
                       <h3 className="text-primary my-3 py-5">
                           Mostly Clicked Urls
                         </h3>
                  </div>
    <Table variant="dark"  responsive="sm" >
      <thead>
        <tr>
          <th>id</th>
          <th>long_url</th>
          <th>short_url</th>
          <th>click count</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((element,key)=> <tr>
                                 <td>{key}</td>
                                <td>{element.longurl}</td>
                                 <td><Button  type="submit" variant=""  onClick={()=>update(element._id)}><a href={element.longurl}>{element.shorturl}</a></Button></td>
                                 <td>{element.count}</td>
                                </tr>
                                    )}
               
      </tbody>
    </Table>
       <Menu/>    
       <Slider/>  
            </Container>

        </div>
    )
}