import Table from 'react-bootstrap/Table';
import { Slider } from './slide';
import { Menu } from './card';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export function UrlTable() {
  const[state,setstate]=useState([]);
  const getallurls=async()=>{
    try{
        const response=await axios.get("https://url-shortner-app-8i7q.onrender.com/api/url/getall")
        await setstate(response.data);
    }catch(err){
    console.log(err);
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
  return (
    <div className=" m-4 ">
    <div className="text-center my-2 py-3">
   <h2 className=" text-dark"> Url Table </h2>
</div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>long_url</th>
          <th>short_url</th>
        </tr>
      </thead>
      <tbody>
        {state.map((element,key)=> <tr>
                                 <td>{key}</td>
                                 <td>{element.longurl}</td>
                                <td><Button variant=""  onClick={()=>update(element._id)}><a href={element.longurl}>{element.shorturl}</a></Button></td>
                                 </tr>
                                  )}           
      </tbody>
    </Table>
    <Slider/>
    <Menu/>
    </div>
  );
}

