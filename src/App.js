import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Header from './Component/Header/Header';
import { createContext, useContext, useState } from 'react';
import Profile from './Component/Profile/Profile';
import Services from './Component/Serveces/Services';
import Update from './Component/Update/Update';
import RequireAuth from './RequireAuth';
import Manage from './Component/Mnage/Manage';
import Footer from './Component/Footer/Footer';
import ServiceCenter from './Component/Location/ServiceCenter';
import Orderpage from './Component/Profile/OrderView/Orderpage';
import NoDevice from './Component/NodeviceFound/NoDevice';
import Blog from './Component/Blog/Blog';

export const UserContext = createContext("ring")
export const ProductContext = createContext("product")
function App() {
  const [User, setuser] = useState([])
  const [product,setproduct]=useState([])

  return (
    <ProductContext.Provider value={[product,setproduct]}>
      <UserContext.Provider value={[User, setuser]}>
        <div className="App">
          <Header></Header>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/Service' element={<Services></Services> }></Route>
            <Route path='/manage' element={<Manage></Manage>}></Route>
            <Route path='/update/:_id' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
            <Route path='/customerservice'element={<ServiceCenter></ServiceCenter>}></Route>
            <Route path='/order/:email' element={<Orderpage></Orderpage>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='*'element={<NoDevice></NoDevice>}></Route>
          </Routes>
          
        </div>
      </UserContext.Provider>
      <Footer></Footer>
      </ProductContext.Provider>


      );
}

      export default App;
