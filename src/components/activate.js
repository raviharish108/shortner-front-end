
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Activate() {
    const[show,setshow]=useState(false);
    const location=useLocation();
    const verify = async () => {
        try {
            const {token} =  queryString.parse(location.search);
            if(!token){
                return(
                    await toast.error("token required",{position:toast.POSITION.TOP_CENTER})
                )
            }
            await axios.get(`https://url-shortner-app-8i7q.onrender.com/api/user/activate?token=${token}`);
             await toast.success("Account Activated!!",{position:toast.POSITION.TOP_CENTER});
           await  setshow (true)
        }catch(err){(
             await toast.error(err.response.data.msg,{position:toast.POSITION.TOP_CENTER})
        )
        }
    };
    useEffect(() => {
        verify();
    }, []);
    const navigate1=useNavigate();
    const navigate2=useNavigate();
    const click1=(()=>{
        navigate1("/login")
    })
    const click2=(()=>{
        navigate2("/register")
    })
    return(
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
         <div className="justify-content-center"><ToastContainer /></div>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={()=>{
            show ? click1() :click2()
          }} >
            <Modal.Title>Account Activation!!</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>{show?"account Activated":"Account not yet activating"}</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{show ? click1() :click2()}}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
    }
 


