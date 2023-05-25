import { Container,Row,Col } from 'react-bootstrap';
import {url}  from '../backendurl/url';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register(){
  const formik = useFormik({
    initialValues: {
      username:'',
      email:'',
      password:'',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be below 15 characters')
        .min(5,"atleast above 5 characters")
        .required('please specify your  username'),
        email:Yup.string()
        .required('please specify your email Address')
        .email("invalid email address"),
        password: Yup.string()
        .min(6,'must be 6 characters and above')
        .required('specify your password'),
    }),
    onSubmit: values => {
      submit(values)
    },
  });
  const [isLoading, setLoading] = useState(false);
  const submit = async (value) => {
    try {
        await setLoading(true);
        await axios.post(`https://url-shortner-app-8i7q.onrender.com/api/user/signup`, value);
        await setLoading(false);
        await toast.success("please Activate your Account  and check your mail",{position:toast.POSITION.TOP_CENTER});
       
    } catch (err) {
        await setLoading(false);
        await console.log(err);
       await toast.error(err.response.data.msg,{position:toast.POSITION.TOP_CENTER})
    }
};
    return(
        <div className=" py-3 ">
             <div className="text-center my-2 py-3">
            <h2 className=" text-dark"> Register Form </h2>
      </div>
       <Container>
       <Row className="justify-content-center"><ToastContainer /></Row>
        <Row className="justify-content-center">
        
            <Col md={6}>
            <Form   onSubmit={formik.handleSubmit} >
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.username} />
      </Form.Group>

      {formik.touched.username && formik.errors.username ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.username}</div> ) : null}
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {formik.touched.email && formik.errors.email ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.email}</div> ) : null}
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password}/>
      </Form.Group>

      {formik.touched.password && formik.errors.password ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.password}</div> ) : null}
      
      <div className="text-center">
      <Button variant="dark" type="submit" className="m-3" disabled={Object.keys(formik.errors).length > 0} >
      {isLoading ? 'Loading…' : 'Register Now'}
      </Button>
      </div>
    </Form>
            </Col>
        </Row>
       </Container>
    </div>
  );
}
   