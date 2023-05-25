import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useState } from 'react';
export function Forgot(){
  const formik = useFormik({
    initialValues: {
      email:''
    },
    validationSchema: Yup.object({
        email:Yup.string()
        .required('please specify your email Address')
        .email("invalid email address"),
    }),
    onSubmit: values => {
      submit(values)
    },
  });
  const [isLoading, setLoading] = useState(false);
  const submit = async (value) => {
    try {
        await setLoading(true);
        await axios.post(`https://url-shortner-app-8i7q.onrender.com/api/user/forgot`, value);
        await setLoading(false);
        await toast.success("please change your password link already send to your email id ",{position:toast.POSITION.TOP_CENTER});
       
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
            <h2 className=" text-dark">Forgot Password Form </h2>
      </div>
       <Container>
       <Row className="justify-content-center"><ToastContainer /></Row>
        <Row className="justify-content-center">
            <Col md={6}>
            <Form  onSubmit={formik.handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {formik.touched.email && formik.errors.email ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.email}</div> ) : null}

      <div className="text-center">
      <Button variant="dark" type="submit" disabled={Object.keys(formik.errors).length > 0} >
      {isLoading ? 'Loading…' : 'submitt'}
      </Button>
      </div>
      
    </Form>
            </Col>
        </Row>
       </Container>
    </div>
  );
}
   