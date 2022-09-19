import { Grid } from '@mui/material'
import React from 'react'
import'./Griditem.css'

function Griditem() {
  return (
    <div className='items'>
    <Grid container spacing={3} className='items'>
        <Grid item xs={12} sm={6} lg={6}>
          <div className='firstimage'>
             <img  className="firstimagetext" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_1_desktop_1X.png" alt="" />
          </div>
          <img  className="gridImage1" src="  https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_0_desktop_1X.jpg" alt="" />
          <img className="gridImage11" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-0_0_mobile_1X.jpg" alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <div className='firstimage'>
             <img  className="firstimagetext" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_1_desktop_1X.png?webp" alt="" />
          </div>
          <img className="gridImage2" src="  https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_0_desktop_1X.jpg?webp" alt="" />
          <img  className="gridImage21"src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-1_0_mobile_1X.jpg?webp" alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <div className='firstimage'>
             <img  className="firstimagetext" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_1_desktop_1X.png?webp" alt="" />
          </div>
          <img className="gridImage3" src=" https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_0_desktop_1X.jpg?webp" alt="" />
          <img className="gridImage31" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-2_0_mobile_1X.jpg?webp" alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <div className='firstimage'>
             <img  className="firstimagetext" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_1_desktop_1X.png?webp" alt="" />
          </div>
          <img className="gridImage4"src=" https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_0_desktop_1X.jpg?webp" alt="" />
          <img className="gridImage41" src="https://www.asus.com/WebsitesBanner/IN/banners/fvhyvd3jp7yxlasi/fvhyvd3jp7yxlasi-3_0_mobile_1X.jpg?webp" alt="" />
        </Grid>
</Grid>
        
    </div>
  )
}

export default Griditem