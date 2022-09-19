import React from 'react';
import './App.css';
import Advertise from './components/Adverise';
import Banner from './components/Banner';
import Griditem from './components/Griditem';
import HotDeals from './components/HotDeals';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Navbarsecond from './components/Navbarsecond';
import Slider1 from './components/Slider1';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Desktops from './components/Desktops';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import Scroll from './components/Scroll';


function App() {
  const linkarrays=['Mobile','Laptops','Desktop / Displays','Motherboards / Components','Networking / IoT / Servers','Accessories' ,'BusinessPCs / Peripherals','Support','Shop']
  
  return (
    <div>
  <Navbar links={linkarrays}/>
  <Navbarsecond/>
  <Slider1/>
  <Banner/>
  <Griditem/>
  <Advertise/>
  <HotDeals/>

  <Routes>
        <Route path='/mobile' element={<Mobiles/>}/>
        
  </Routes>
 <Bottom/>

 <Footer/>

    </div>
  );
}

export default App;
