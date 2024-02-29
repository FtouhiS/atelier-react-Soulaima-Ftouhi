import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';


export default function NavigationBar() {
  
         return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyEvents</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="events" 
            style={({isActive})=>({textDecoration:isActive?"underline":"none"})}>Events</NavLink>
             <NavLink to="AddEvent" 
            style={({isActive})=>({textDecoration:isActive?"underline":"none"})}>AddEvent</NavLink>
          </Nav>
        </Container>
      </Navbar>
     

     
    </>
  );
}