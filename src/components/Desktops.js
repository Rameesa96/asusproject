import React from 'react'
import './Mobile.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Mobile.css'
import { deepOrange } from '@mui/material/colors';
function Desktops() {
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
 <img src="https://dlcdnwebimgs.asus.com/gain/3428DAC1-5A72-42E6-8AA5-86FB4118FD35/w185/fwebp" alt="" />
              
  </div>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" className='cardname'>
    <h4 className='cardname'>ROG Strix GA15 <br/> G15DK-R5600X098W</h4>
    </Typography>
    <hr className='line'></hr>
    <Typography variant="body2" color="text.secondary">
      starting at
      
      <h2>44,990</h2>
      <hr className='line'></hr>
      <ul className='features'>
<li>GeForce RTX 3060</li>
<li>16GB</li>
<li>1x PCIe® 4.0 x 162x PCIe® 3.0 x 12x M.2 connector for storage4x DDR4 SO-DIMM slot</li>
<li>1TB and up256GB - 512GB</li>
<li>AMD Ryzen™ 5</li>
<li>Windows 11 Home</li>
</ul>
    </Typography>
    <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
    <Button variant="outlined">Outlined</Button>
 
  </CardContent>

</Card></div>
<div className='card'><Card sx={{ maxWidth: 445 }}>
  <div className='cardimage'>
    <img src="https://dlcdnwebimgs.asus.com/gain/3428DAC1-5A72-42E6-8AA5-86FB4118FD35/w185/fwebp" alt="" />
  </div>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" className='cardname'>
    <h4 className='cardname'>ROG Strix GA15 <br/> G15DK-R5800X298T</h4>
    </Typography>
    <hr className='line'></hr>
    <Typography variant="body2" color="text.secondary">
      starting at
      
      <h2>1,14,990.00</h2>
      <hr className='line'></hr>
      <ul className='features'>
<li>GeForce RTX 3070</li>
<li>16GB</li>
<li>1x PCIe® 4.0 x 162x PCIe® 3.0 x 12x M.2 connector for storage4x DDR4 SO-DIMM slot</li>
<li>1TB and up1TB and up</li>
<li>AMD Ryzen™ 7</li>
<li>Windows 10 Home</li>
</ul>
    </Typography>
    <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
    <Button variant="outlined">Outlined</Button>
 
  </CardContent>
  
</Card></div>
<div className='card'><Card sx={{ maxWidth: 445 }}>
  <div className='cardimage'>
    <img src="https://dlcdnwebimgs.asus.com/gain/5E8E8E10-9327-42D6-B7F3-FCEBBBD2F973/w185/fwebp" alt="" />
  </div>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" className='cardname'>
    <h4 className='cardname'>ROG Strix GA35 <br/> G35DX-IN057T</h4>
    </Typography>
    <hr className='line'></hr>
    <Typography variant="body2" color="text.secondary">
      starting at
      
      <h2>499990</h2>
      <hr className='line'></hr>
      <ul className='features'>
<li>GeForce&nbsp;RTX™&nbsp;3070</li>
<li>Windows 10 Home</li>
<li>AMD Ryzen™ 7 5000 Series</li>
<li>16GB DDR4-3200 LO-DIMM x 2</li>
<li>1TB SATA 7200RPM 8.89cm(3.5") HDD1TB M.2 NVMe™ PCIe® 4.0 SSD</li>
</ul>
    </Typography>
    <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
    <Button variant="outlined">Outlined</Button>
 
  </CardContent>
 
</Card></div>
<div className='card'><Card sx={{ maxWidth: 445 }}>
  <div className='cardimage'>
    <img src="https://dlcdnwebimgs.asus.com/gain/4AE1EB77-C820-444A-B0A5-49912F3C1412/w185/fwebp" alt="" />
  </div>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" className='cardname'>
    <h4 className='cardname'>ROG Strix G10CE <br/> G10CE-51040F004T</h4>
    </Typography>
    <hr className='line'></hr>
    <Typography variant="body2" color="text.secondary">
      starting at
      
      <h2 style={{color:deepOrange}}>499990</h2>
      <hr className='line'></hr>
      <ul className='features'>
<li>GeForce GTX 1660 Ti</li>
<li>16GB</li>
<li>1x PCIe® 4.0 x 162x PCIe® 3.0 x 11x M.2 connector for WiFi2x M.2 connector for storage4x DDR4 SO-DIMM slot</li>
<li>1TB and up256GB - 512GB</li>
<li>Intel® Core™ i5</li>
<li>Windows 10 Home</li>
</ul>
    </Typography>
    <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
    <Button variant="outlined">Outlined</Button>
 
  </CardContent>
</Card></div>
<div className='card'><Card sx={{ maxWidth: 445 }}>
  <div className='cardimage'>
    <img src="https://dlcdnwebimgs.asus.com/gain/4AE1EB77-C820-444A-B0A5-49912F3C1412/w185/fwebp" alt="" />
  </div>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" className='cardname'>
    <h4 className='cardname'>ROG Strix G10DK <br/> G10DK-73700X041T</h4>
    </Typography>
    <hr className='line'></hr>
    <Typography variant="body2" color="text.secondary">
      starting at
      
      <h2>499990</h2>
      <hr className='line'></hr>
      <ul className='features'>
<li>GeForce GTX 1660 Ti</li>
<li>16GB</li>
<li>1x PCIe® 3.0 x 11x PCIe® 4.0 x 161x M.2 connector for WiFi2x M.2 connector for storage4x DDR4 SO-DIMM slot</li>
<li>1TB and up256GB - 512GB</li>
<li>AMD Ryzen™ 7</li>
<li>Windows 10 Home</li>
</ul>
    </Typography>
    <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
    <Button variant="outlined">Outlined</Button>
 
  </CardContent>
</Card></div>
<div className='card'><Card sx={{ maxWidth: 445 }}>
  <div className='cardimage'>
    <img src="https://dlcdnwebimgs.asus.com/gain/4AE1EB77-C820-444A-B0A5-49912F3C1412/w185/fwebp" alt="" />
  </div>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" className='cardname'>
    <h4>ROG Strix G10DK <br/> G10DK-R5600X146T</h4>
    </Typography>
    <hr classname="line"/>
    <Typography variant="body2" color="text.secondary">
      starting at
      
      <h2>499990</h2>
      <hr className='line'></hr>
      <ul className='features'>
<li>GeForce GTX 1660 Ti</li>
<li>16GB</li>
<li>1x PCIe® 3.0 x 11x PCIe® 4.0 x 161x M.2 connector for WiFi2x M.2 connector for storage4x DDR4 SO-DIMM slot</li>
<li>1TB and up256GB - 512GB</li>
<li>AMD Ryzen™ 5</li>
<li>Windows 10 Home</li>
</ul>
    </Typography>
    <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
    <Button variant="outlined">Outlined</Button>
 
  </CardContent>
</Card></div>


    </Slider>
  </div>
  )
}

export default Desktops