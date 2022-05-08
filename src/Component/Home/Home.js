import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../topdown-g3ecb46bd7_1920.jpg"
import Display from './Display';
import Aboutus from '../About.js/Aboutus';
import Temp from '../About.js/Temp';
import Location from '../Location/Location';
const Home = () => {
    const [User, setuser] = useContext(UserContext)
    // console.log(User)
    return (
        <div>
            {/* <img src="https://i.ibb.co/MSrF3dG/images-1.jpg" alt="" />      */}
            <Carousel fade>
                <Carousel.Item className='carusalimgcontainer'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yWdNhwS/topdown-g3ecb46bd7-1920.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carusalimgcontainer'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pJvrp3Z/warehouse-g657ceabe7-1920.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            
            </Carousel>
            <Display></Display>
            <Aboutus></Aboutus>
            {/* <Location></Location> */}
            <Location></Location>
            <Temp></Temp>
        </div>
    );
};

export default Home;