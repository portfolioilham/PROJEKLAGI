import { Navbar, Container, Nav } from "react-bootstrap";
// import { useState, useEffect } from "react";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";


const NavbarComponent = () => {

  
      function pindahwa() {
        window.location.href="https://wa.me/6285939429909";
      }

  // const [isScrolled, setIsScrolled] = useState(false);

  // function handleScroll() {
  //   if (window.scrollY > 5) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div >
      <Navbar bg="dark"  expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand className="Brand fs-3 fw-bold" >Spectre Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={
                      
                      ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }end>{link.text}</NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="tombol text-center">
              <button onClick={()=> pindahwa()} className="btn btn-outline-blue rounded-5"> 
            Join With Us
            
              </button>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
