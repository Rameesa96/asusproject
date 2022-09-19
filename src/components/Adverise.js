import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Grid} from '@mui/material'
import './Advertise.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Advertise() {
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
<div className='adver'>
  <h1 className='advertisehead'>Campaigns and Events</h1>
  <button className='btnadv' >See all ></button>
    <Slider  className='advertise' {...settings}>
   <div className='slide1'>
     <Card className='advertisecard' >
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
          height="160"
          image="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20220622052934.jpg?webp"
          alt="green iguana"
        />
        <CardContent>
        
          <Typography variant="body2" color="text.secondary" >
            
          <span className='textadv'>AMD Radeon Raise The Game Bundle 2022</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div >
    
     <Card className='advertisecard'>
      <CardActionArea>
        <CardMedia
          component="img"
          className="media"
          height="160"
          image="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20210312090611.jpg?webp"
          alt="green iguana"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          <span className='textadv'>ROG Academy</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div >
    <Card  className='advertisecard'>
      <CardActionArea>
        <CardMedia
        className="media"
          component="img"
          height="160"
          image="https://www.asus.com/media/Odin/Websites/in/SiteSetting/20210312090636.jpg?webp"
          alt="green iguana"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          <span className='textadv'>ROG Showdown Series</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
     
    
    </Slider>
    </div>
  )
}

export default Advertise