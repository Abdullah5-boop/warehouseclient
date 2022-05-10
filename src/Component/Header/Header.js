import React, { useContext, useEffect } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import "./Header.css"
import CustomHook from '../CustomHook';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../../Firebase.init';
const Header = () => {
    // const {User}=CustomHook()
    // console.log(User?.uid)
    const [User, setuser] = useContext(UserContext)
    const { HandleSignout } = CustomHook();
    useEffect(() => {
        onAuthStateChanged(auth, (User) => {
            setuser(User)

        });
    }, [])
    return (
        <div>
            <>
                {['xxl'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mb-3 p-2 navbkgrd mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#">SuperCarWareHouse</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        SuperCarWareHouse
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="ms-auto d-flex justify-content-center">
                                        <div className="navheader mx-3">
                                            <Link style={{ textDecoration: "none" }} className='fs-5 mx-2 font-weight-bold' to="/"><p>Home</p> </Link>
                                            {/* <Nav.Link className='fs-5 mx-3 font-weight-bold' href="/profile"><p>profile</p> </Nav.Link> */}
                                        </div>
                                        <div className="navheader mx-3">
                                            <Link style={{ textDecoration: "none" }} className='fs-5 mx-2 font-weight-bold' to="/Service"><p>Service</p> </Link>
                                            {/* <Nav.Link className='fs-5 mx-3 font-weight-bold' href="/profile"><p>profile</p> </Nav.Link> */}
                                        </div>
                                        <div className="navheader mx-3">
                                            <Link style={{ textDecoration: "none" }} className='fs-5 mx-2 font-weight-bold' to="/profile"><p>Shop</p> </Link>
                                            
                                        </div>
                                        <div className="navheader mx-3">
                                            <Link style={{ textDecoration: "none" }} className='fs-5 mx-2 font-weight-bold' to="/Blog"><p>Blog</p> </Link>
                                            
                                        </div>
                                        <div className="navheader mx-3">
                                            <Link style={{ textDecoration: "none" }} className='fs-5 m-1 font-weight-bold' to="/register"><p>Register</p> </Link>
                                        </div>
                                        <div className="mx-2 d-flex justify-content-center align-items-center">
                                            {
                                                User?.uid ?

                                                    <div className='navheader d-flex justify-content-center align-items-center'>
                                                        <Link style={{ textDecoration: "none" }} className='fs-5 mx-3  font-weight-bold' to="/manage"><p>Manage</p> </Link>
                                                        <Link onClick={HandleSignout} style={{ textDecoration: "none" }} className='fs-5 mx-3 font-weight-bold' to="/profile"><p>sign out</p> </Link>

                                                    </div>

                                                    :
                                                    <Link style={{ textDecoration: "none" }} className='fs-5 m-1 font-weight-bold' to="/Login"><p>sign in</p> </Link>
                                            }

                                        </div>

                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    );
};

export default Header;