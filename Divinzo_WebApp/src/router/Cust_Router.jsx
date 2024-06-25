import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../component/customer/footer/cust_footer';
import Header from '../component/customer/header/cust_header';
import Menubar from '../component/customer/menubar/menubar';
import HomePage from '../pages/customer/homepage/homepage';
import BannerSlider from '../component/customer/banner/banner';


const Cust_Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/> 
        {/* <Route path='/' element={<Footer/>} /> */}
        {/* <Route path='/' element={<Header/>}/> */}
        {/* <Route path='/' element={<Menubar/>}/>  */}
        {/* <Route path='/' element={<BannerSlider/>}/>  */}

        


      </Routes>
    </div>
  )
}

export default Cust_Router;