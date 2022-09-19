import React from 'react'
import './Mobile.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
function Mobiles() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
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
      <Slider className='mobileslide'{...settings}>
      <div className='card card1'><Card className='mobilecard'>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/3C7AF950-F88D-40D8-93FE-B49C4F26EAA2/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <span className='cardname'>ROG phone 5s</span>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
       
        <h2> ₹ 49,999.00</h2>
        <hr></hr>
        <ul className='features'>
<li>Qualcomm Snapdragon 888 Plus</li>
<li>LPDDR5 8GB</li>
<li>UFS3.1 128GB</li>
<li>6.78-inch display</li>
<li>6000mAh battery</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button  className="buttonL" variant="outlined">Learn more</Button><PlaceOutlinedIcon className='btn'></PlaceOutlinedIcon>
   
    </CardContent>
  
  </Card></div>
  <div className='card card2'><Card className='mobilecard'>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/CB867590-6489-47F9-B412-76FC47932720/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <span className='cardname'>ROG phone 5s</span>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>₹ 49,999.00</h2>
        <hr></hr>
        <ul className='features'>
<li>Qualcomm Snapdragon 888 Plus</li>
<li>LPDDR5 8GB</li>
<li>UFS3.1 128GB</li>
<li>6.78-inch display</li>
<li>6000mAh battery</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button  className="buttonL" variant="outlined">Learn more</Button><PlaceOutlinedIcon className='btn'></PlaceOutlinedIcon>
   
    </CardContent>
    
  </Card></div>
  <div className='card card3'><Card className='mobilecard'>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/3C7AF950-F88D-40D8-93FE-B49C4F26EAA2/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <span className='cardname'>ROG phone 5s</span>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>₹ 57,999.00</h2>
        <hr></hr>
        <ul className='features'>
<li>Qualcomm Snapdragon 888 Plus</li>
<li>LPDDR5 8GB</li>
<li>UFS3.1 128GB</li>
<li>6.78-inch display</li>
<li>6000mAh battery</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <Button  className="buttonL" variant="outlined">Learn more</Button><PlaceOutlinedIcon className='btn'></PlaceOutlinedIcon>
   
    </CardContent>
   
  </Card></div>
  <div className='card card4'><Card className='mobilecard'>
    <div className='cardimage'>
      <img src="https://dlcdnwebimgs.asus.com/gain/CB867590-6489-47F9-B412-76FC47932720/w185/fwebp" alt="" />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='cardname'>
      <span className='cardname'>ROG phone 5s</span>
      </Typography>
      <hr></hr>
      <Typography variant="body2" color="text.secondary">
        starting at
        
        <h2>₹ 57,999.00</h2>
        <hr></hr>
        <ul className='features'>
<li>Qualcomm Snapdragon 888 Plus</li>
<li>LPDDR5 8GB</li>
<li>UFS3.1 128GB</li>
<li>6.78-inch display</li>
<li>6000mAh battery</li>
</ul>
      </Typography>
      <Button className="buttonW"variant="contained" size="medium" width="100">Buy</Button>
      <div className='buttonlo'><Button  className="buttonL" variant="outlined">Learn more</Button><PlaceOutlinedIcon className='btn' /></div>
     
    </CardContent>
  </Card></div>
  
      </Slider>
      </div>
   );
}

export default Mobiles