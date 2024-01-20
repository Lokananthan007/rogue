import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Menubar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };


  return (
    <Navbar className="navbar" sticky="top" expand="lg" data-bs-theme="dark">
      <Navbar.Brand as={Link} to="/">
        ROGUE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-5">
          <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/service" className={location.pathname === '/service' ? 'active' : ''}>
            Service
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Nav.Link>
        </Nav>
        <button id='Button' onClick={handleButtonClick} className="me-3">request</button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menubar;