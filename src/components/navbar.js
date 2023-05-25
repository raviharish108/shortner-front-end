import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
export function Topper(){
  const userToken=localStorage.getItem("user-token");
  const navigate=useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  } 
    return(
        <div>
            <Navbar bg="dark" variant="dark"  responsive="sm">
        <Container>
          <Navbar.Brand href="/home">URL Shortner</Navbar.Brand>
          <Nav  className="justify-content-end" >
            <Nav.Link href="/table">all URL</Nav.Link>
            <Nav.Link href="/">DashBoard</Nav.Link>
            <NavDropdown title={<Icon.Person color="white" size={26}/>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">User</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Edit</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mode</NavDropdown.Item>
             {userToken ? <NavDropdown.Item href="#action4"><Button bg="dark" variant="dark" onClick={()=>logout()}>LogOut</Button></NavDropdown.Item> :<NavDropdown.Item href="/login">Login</NavDropdown.Item>} 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               setting
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}