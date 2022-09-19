import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import {Carousel} from 'react-responsive-carousel'

import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Mobile.css'
function Laptops() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='APP'>
      <Slider {...settings}>
      <div className='card'><Card sx={{ maxWidth: 445 }}>
    <div className='cardimage'>
   <img src="https://dlcdnwebimgs.asus.com/gain/d81deb62-5ccf-4d65-919f-c964e818058c/w185/fwebp" alt="" />
                
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <h4 className='cardname'>Vivobook 15 (X1502, 12th Gen Intel)</h4>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>44,990</h2>
        <hr color='orange'></hr>
        <ul className='features'>
<li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
<li>Up to 12th Intel<sup>®</sup> Core™ i7 processor</li>
<li>Up to 16 GB DDR4 memory</li>
<li>Up to 512 GB SSD storage</li>
<li>Up to 15.6'' FHD NanoEdge display</li>
<li>180-degree hinge design</li>
<li>Multiple color option</li>
<li>Optional fingerprint login sensor</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button variant="outlined">Outlined</Button>
   
    </CardContent>
  
  </Card></div>
  <div className='card'><Card sx={{ maxWidth: 345 }}>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/1f1f6da2-9029-4c42-93de-103a4339826e/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <h4  className='cardname'>Zenbook 14X OLED Space Edition (UX5401, 12th Gen Intel)</h4>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>1,14,990.00</h2>
        <hr></hr>
        <ul className='features'>
<li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
<li>Up to 12th gen Intel<sup>®</sup> Core<sup>™</sup> i9 processor</li>
<li>3.5'' OLED ZenVision display</li>
<li>14" 2.8K OLED NanoEdge touchscreen</li>
<li>Space-grade compliant durability</li>
<li>Up to 32 GB memory</li>
<li>Up to 1 TB SSD storage</li>
<li>Thunderbolt<sup>™</sup> 4 USB-C™</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button variant="outlined">Outlined</Button>
   
    </CardContent>
    
  </Card></div>
  <div className='card'><Card sx={{ maxWidth: 345 }}>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/e53e9ad1-6a97-4bb0-b726-dfc6b2392a45/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <h4  className='cardname'>Zenbook 14 OLED (UX3402, 12th Gen Intel)</h4>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>499990</h2>
        <hr></hr>
        <ul className='features'>
<li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
<li>Up to 12th gen Intel<sup>®</sup> Core<sup>™</sup> i9 processor</li>
<li>3.5'' OLED ZenVision display</li>
<li>14" 2.8K OLED NanoEdge touchscreen</li>
<li>Space-grade compliant durability</li>
<li>Up to 32 GB memory</li>
<li>Up to 1 TB SSD storage</li>
<li>Thunderbolt<sup>™</sup> 4 USB-C™</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button variant="outlined">Outlined</Button>
   
    </CardContent>
   
  </Card></div>
  <div className='card'><Card sx={{ maxWidth: 345 }}>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/d81deb62-5ccf-4d65-919f-c964e818058c/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <h4  className='cardname'>Vivobook 14 (X1402, 12th Gen Intel)</h4>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>499990</h2>
        <hr></hr>
        <ul className='features'>
<li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
<li>Up to 12th Intel<sup>®</sup> Core™ i7 processor</li>
<li>Up to 16 GB DDR4 memory</li>
<li>Up to 512 GB SSD storage</li>
<li>Up to 14'' FHD NanoEdge display</li>
<li>180-degree hinge design</li>
<li>Multiple color option</li>
<li>Optional ASUS NumberPad 2.0</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button variant="outlined">Outlined</Button>
   
    </CardContent>
  </Card></div>
  <div className='card'><Card sx={{ maxWidth: 345 }}>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/1db55cf3-81ab-4552-b126-d881aa5b42a5/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <h4  className='cardname'>Zenbook 14 OLED (UX3402, 12th Gen Intel)</h4>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>499990</h2>
        <hr></hr>
        <ul className='features'>
<li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
<li>Up to 12th Intel<sup>®</sup> Core™ i7 processor</li>
<li>Up to 16 GB memory</li>
<li>Up to 1 TB SSD storage</li>
<li>Up to 14'' 2.8K OLED NanoEdge display</li>
<li>Pantone validated</li>
<li>ASUS Antibacterial Guard</li>
<li>WiFi 6E (802.11ax)</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button variant="outlined">Outlined</Button>
   
    </CardContent>
  </Card></div>
  <div className='card'><Card sx={{ maxWidth: 345 }}>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/1db55cf3-81ab-4552-b126-d881aa5b42a5/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <h4  className='cardname'>VivoBook S 15 OLED (S3502,12th Gen Intel)</h4>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>499990</h2>
        <hr></hr>
        <ul className='features'>
<li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
<li>Up to 12th Intel<sup>®</sup> Core™ i7 processor</li>
<li>Up to 16 GB memory</li>
<li>Up to 1 TB SSD storage</li>
<li>Up to 14'' 2.8K OLED NanoEdge display</li>
<li>Pantone validated</li>
<li>ASUS Antibacterial Guard</li>
<li>WiFi 6E (802.11ax)</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button variant="outlined">Outlined</Button>
   
    </CardContent>
  </Card></div>
 
  
      </Slider>
    </div>);
    
}

export default Laptops