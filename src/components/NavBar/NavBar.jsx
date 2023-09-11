import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  bg="dark" data-bs-theme="dark">
    <Container >
    <Link to='/'>
    <Navbar.Brand >
            <img
              src="https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/06/white-logo@2x.png"
              className="d-inline-block align-top"
              alt="Hongo Logo"
              width={120}
            />
          </Navbar.Brand>
          </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
           <Nav.Link className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary' }  as={Link} to='/category/Leather'>Leather</Nav.Link>
            <Nav.Link className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary' }  as={Link} to="/category/Minimalist">Minimalist</Nav.Link>
        </Nav> 
        <Nav>
        <Nav.Link className={styles.right}> 0 <CardWidget /></Nav.Link>
        </Nav>
      
      </Navbar.Collapse>
    
    </Container>
  </Navbar>
  );
}

export default NavBar