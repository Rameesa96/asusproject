import React from 'react'
import { CardActionArea, Grid,Typography} from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './Hotdeals.css'
import {NavLink,Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HotDeals() {
    const navLinkStyles=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration:isActive?'none':'underline'
        }

    }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
       
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };
  return (
    <div className='hotdeals'>
        <h1 style={{fontSize:42,color:'black'}}>Hot Deals</h1>
        <div className='small'> <Slider className='mobileslide'{...settings}>
      <div className='card card1'><CardActionArea>
                   <CardMedia
                    component="img"
                    style={{width:150}}
                    image="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081514.svg"
                    alt="mobile"
                   />
                   
                   <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    <NavLink to='/mobile' style={navLinkStyles} className='hotdealtext'>Mobile</NavLink>
                    </Typography>
                   </CardContent>
                </CardActionArea></div>
  <div className='card card2'>
  <CardActionArea>
                   <CardMedia
                 style={{width:150}}
                 component="img"
                  height="50"
                 image="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081726.svg"
                 alt="mobile"
                     />
                   <CardContent>
          
                <Typography variant="body2" color="text.secondary">
                <NavLink to='laptops' style={navLinkStyles} className='hotdealtext'>Laptop</NavLink>
               </Typography>
              </CardContent>
      </CardActionArea>
  </div>
  <div className='card card3'><CardActionArea>
        <CardMedia
        style={{width:150}}
          component="img"
          height="50"
          image="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081749.svg"
          className='hot'
          alt="mobile"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          <Link to='/desktops' className='hotdealtext'>Desktop</Link>
          </Typography>
        </CardContent>
      </CardActionArea></div>
  <div className='card card4'> <CardActionArea>
        <CardMedia
        style={{width:150}}
          className='hot'
          component="img"
          height="50"
          image="https://www.asus.com/media/Odin/Images/DealsPage/all-deals.svg"
          alt="mobile"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          <Link to='alldeals' className='hotdealtext'>All Deals</Link>
          </Typography>
        </CardContent>
      </CardActionArea></div>
  
      </Slider></div>
      <div className='big'>
        <Grid  container spacing={2}>
            <Grid item xs={2} md={2} lg={4}></Grid>
            <Grid item xs={2} md={2} lg={1}>
               <CardActionArea>
                   <CardMedia
                    component="img"
                    height="50"
                    image="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081514.svg"
                    alt="mobile"
                   />
                   
                   <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    <NavLink to='/mobile' style={navLinkStyles} className='hotdealtext'>Mobile</NavLink>
                    </Typography>
                   </CardContent>
                </CardActionArea>
            </Grid>
            <Grid item xs={2} md={2} lg={1}>
            <CardActionArea>
                   <CardMedia
                 component="img"
                  height="50"
                 image="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081726.svg"
                 alt="mobile"
                     />
                   <CardContent>
          
                <Typography variant="body2" color="text.secondary">
                <NavLink to='laptops' style={navLinkStyles} className='hotdealtext'>Laptop</NavLink>
               </Typography>
              </CardContent>
      </CardActionArea>
            </Grid>
            <Grid item xs={2} md={2} lg={1}>
            <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image="https://www.asus.com/media/Odin/Websites/global/DealsPage/20210521081749.svg"
          alt="mobile"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          <Link to='/desktops' className='hotdealtext'>Desktop</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
            </Grid>
            <Grid item xs={2} md={2} lg={1}>
            <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image="https://www.asus.com/media/Odin/Images/DealsPage/all-deals.svg"
          alt="mobile"
        />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
          <Link to='alldeals' className='hotdealtext'>All Deals</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
            </Grid>
        </Grid>
    </div>
    </div>
  )
}

export default HotDeals