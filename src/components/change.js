import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export function ChangePassword(){
  const[state,setstate]=useState(false);
  const navigate=useNavigate();
  const location=useLocation();
  const verify = async () => {
      try {
          const {token,id} =  queryString.parse(location.search);
          if(!token||!id){
            return (
                await toast.danger("something wrong",{position:toast.POSITION.TOP_CENTER})
              )
          }
          const result=await axios.get(`https://url-shortner-app-8i7q.onrender.com/api/user/verify?token=${token}&id=${id}`);
           await toast.success("change password!!",{position:toast.POSITION.TOP_CENTER});
         await  setstate (true);
      }catch(err){
        setstate(false)
           await toast.error(err.response.data.msg,{position:toast.POSITION.TOP_CENTER});
           await navigate("/forgot")
      }
  };
  useEffect(() => {
      verify();
  }, []);

const formik = useFormik({
    initialValues: {
     password:'',
      confirmation_password:'',
    }, validationSchema: Yup.object({
        password: Yup.string()
        .required('password is required')
         .min(5, 'Your password is too short.')
         .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
         confirmation_password: Yup
        .string()
        .required('password is required')
         .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
    onSubmit: values => {
      submit(values)
    }})
    const[activation,setActivation]=useState(false);
    const submit = async (value) => {
    try {
      const {token,id} =  queryString.parse(location.search);
          if(!token||!id){
              return(
                  await toast.danger("something wrong",{position:toast.POSITION.TOP_CENTER})
              )
          }
        await axios.post(`https://url-shortner-app-8i7q.onrender.com/api/user/changepassword?token=${token}&id=${id}`, value);
        await toast.success("successfully changed password!!",{position:toast.POSITION.TOP_CENTER});   
        await setActivation(true);  
    } catch (err) {
       await toast.error(err.response.data.msg,{
        position:toast.POSITION.TOP_CENTER
      })
    }
};
const navigate1=useNavigate();
    const click1=(()=>{
        navigate1("/login")
    })
   
if(activation){
  return(
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
     <div className="justify-content-center"><ToastContainer /></div>
    <Modal.Dialog>
      <Modal.Header closeButton onClick={()=>{ click1() 
      }} >
        <Modal.Title>Account Activation!!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>password successfully changed</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{ click1()}}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}
    return(
        <div className=" py-3 ">
             <div className="text-center my-2 py-3">
            <h2 className=" text-dark"> Change Password Form </h2>
      </div>
       <Container>
         <Row className="justify-content-center"><ToastContainer /></Row>
        <Row className="justify-content-center">
            <Col md={6}>
            {state ? <Form onSubmit={formik.handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
      {formik.touched.password && formik.errors.password ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.password}</div> ) : null}

        <Form.Label>Confirmation Password</Form.Label>
        <Form.Control type="password" placeholder="Confirmation_Password"  name="confirmation_password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.confirmation_password} />
      </Form.Group>

      {formik.touched.confirmation_password && formik.errors.confirmation_password ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.confirmation_password}</div> ) : null}

      <div className="text-center">
      <Button variant="dark" type="submit" disabled={Object.keys(formik.errors).length > 0} >
       Change Password
      </Button>
      <Button variant="dark" type="submit"  className="m-3" >
        Log In
      </Button>
      </div>
    </Form> :"verifying...."}
            </Col>
        </Row>
       </Container>
    </div>
  );
}
   