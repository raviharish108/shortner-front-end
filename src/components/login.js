import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export function Login(){
   const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
    },
    validationSchema: Yup.object({
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
   const navigate=useNavigate();
   const navigate1=useNavigate();
  const submit = async (value) => {
    try {
        await setLoading(true);
        const response=await axios.post(`https://url-shortner-app-8i7q.onrender.com/api/user/login`, value);
        const token=await response.data.token;
        if(!token){
          await setLoading(false);
          await toast.error("invalid token",{
           position:toast.POSITION.TOP_CENTER
         })
        }
        await localStorage.clear();
        await localStorage.setItem('user-token', token);
        await setLoading(false);
        await toast.success(response.data.msg,{position:toast.POSITION.TOP_CENTER});
        await navigate("/home");
       
    } catch (err) {
        await setLoading(false);
       await toast.error(err.response.data.msg,{
        position:toast.POSITION.TOP_CENTER
      })
    }
};
    return(
        <div className=" py-3 ">
             <div className="text-center my-2 py-3">
            <h2 className=" text-dark"> Log In Form </h2>
      </div>
       <Container>
         <Row className="justify-content-center"><ToastContainer /></Row>
        <Row className="justify-content-center">
            <Col md={6}>
            <Form  onSubmit={formik.handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {formik.touched.email && formik.errors.email ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.email}</div> ) : null}
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      {formik.touched.password && formik.errors.password ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.password}</div> ) : null}

      <div className="text-center">
      <Button variant="dark" type="submit"  className="m-3" disabled={Object.keys(formik.errors).length > 0} >
         {isLoading ? 'Loading…' : 'Login'}
      </Button>
      <Button variant="dark" type="submit"  className="m-3"  onClick={()=>{ navigate1("/register")}}> Register Now</Button>
      </div>
      <div className="text-center">
        <a href="/forgot">Forgot Passwort</a>
      </div>
    </Form>
            </Col>
        </Row>
       </Container>
    </div>
  );
}
   