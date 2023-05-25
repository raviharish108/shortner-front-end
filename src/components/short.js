import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Menu } from  "./card.js"
import { Slider } from './slide.js';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useState } from 'react';
export function Short(){
   const formik = useFormik({
    initialValues: {
      base_url:''
    },
    validationSchema: Yup.object({
        base_url:Yup.string()
        .required('please specify your url')
    }),
    onSubmit: values => {
      submit(values)
    },
  });
  const [isLoading, setLoading] = useState(false);
  const submit = async (value) => {
    try {
        await setLoading(true);
         await axios.post(`https://url-shortner-app-8i7q.onrender.com/api/url/shorturl`, value);
        await setLoading(false);
        await toast.success("successfully changed!! ",{position:toast.POSITION.TOP_CENTER});
    } catch (err) {
         await setLoading(false);
        await toast.error(err.response.data.msg,{position:toast.POSITION.TOP_CENTER })
        await console.log(err);
    }
};
    return(
        <div className=" py-3 ">
             <div className="text-center my-2 py-3">
            <h2 className=" text-dark"> Short Form </h2>
      </div>
      <ToastContainer />
       <Container>
         
        <Row className="justify-content-center">
            <Col md={6}>
            <Form onSubmit={formik.handleSubmit} >
            <Form.Control type="text" placeholder="paste your long url......"  className="m-3" name="base_url" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.base_url} />
                {formik.touched.base_url && formik.errors.base_url ? ( <div style={{color:"red",fontsize:"14px",margin:"10px"}}>{formik.errors.base_url}</div> ) : null}
         <div className="text-center">
      <Button variant="dark" type="submit"   disabled={Object.keys(formik.errors).length > 0}>
       {isLoading ? 'Loading…' : 'make short'}
      </Button>
      </div>
      
    </Form>
            </Col>
        </Row>
       </Container>   
       <Menu/>    
       <Slider/>               
    </div>
  );
}
   