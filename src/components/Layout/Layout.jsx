import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';


function Layout () {
 
  return (
    <div>
      {/* You can add a navbar here if needed */}
        
        <Header/>
        {/* <Navbar/> */}
      
       <main style={{ minHeight: '80vh',  overflow:'hidden'}} className='container-fluid px-3 my-5'>
        <Outlet /> {/* Page-specific content will appear here */}
      </main>
      

      {/* You can add a footer here if needed */}
      <Footer/>
       
    </div>
  );
};

export default Layout;
