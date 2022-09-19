import React from 'react'
import {Grid} from '@mui/material'
import './Bottom.css'
function Bottom() {
  return (
    <div className='bottom'>
      <div className='bottomgrid'>
        <Grid container >
            <Grid item xs={12} sm={3} lg={4} md={4} className="bottom1"><div className='text'><h6><img  className='bottomimg' src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113532.svg" alt="" /><span  className='bottomtxt'> Free shipping</span></h6>
            <div className='txt'>Free shipping on all products available on eShop*</div></div></Grid>
            <Grid item xs={12} sm={3} lg={2} md={2} className="bottom12">
                <div className='text'><h6><img className='bottomimg' src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113757.svg" alt="" /><span className='bottomtxt'>Easy Return</span>
                </h6>
                <div className='txt'>7-days hassle free return</div></div></Grid>
           
            <Grid item xs={12} sm={3}>
            <div className='text'><h6><img  className='bottomimg' src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113808.svg" alt="" /><span className='bottomtxt'>Safe and Secure Payments</span> </h6>
                <div className='txt'>Secure encryption for all transactions*</div></div>
            </Grid>
            <Grid item xs={12} sm={3} lg={3}><div className='text'><h6><img className='bottomimg' src="https://www.asus.com/media/Odin/Websites/in/Menu/20220412113816.svg" alt="" /><span className='bottomtxt'>Customer Support</span> </h6>
            <div className='txt'>Need help? Contact us directly*</div></div></Grid>
        </Grid>
      
        </div>
        <hr />
    </div>
  )
}

export default Bottom