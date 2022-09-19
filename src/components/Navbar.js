import React, { useState } from 'react'
import {AppBar, Grid,  Tabs, Toolbar,useMediaQuery,useTheme} from '@mui/material'
import'./Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DrawerComp from './DrawyerComp';
import {Popover,Typography }from '@mui/material';
import Banner from './Banner';
import Mobiledrop from './Mobiledrop';
import Laptopdrop from './dropdown/Laptopdrop';
import Desktopdraw from './dropdown/Desktopdraw';
import Motherdraw from './dropdown/Motherdraw';
import Networkdraw from './dropdown/Networkdraw';
import Accessories from './dropdown/Accessories';
import Support from './dropdown/Support';
import Shop from './dropdown/Shop';

function Navbar({links}) {
  const [anchor,setAnchor]=useState(null);
  const open=Boolean(anchor)
  const openPopover=(event)=>{
    setAnchor(event.currentTarget);
  }
 
    const theme=useTheme()
    console.log(theme)
    const isMatch=useMediaQuery(theme.breakpoints.down('lg'))
    console.log(isMatch)

  return (
    <div >
   <AppBar sx={{backgroundColor:'white'}}>
    <Toolbar className='navbar'>
        <Grid container sx={{placeItems:'center'}} >
            <Grid item xs={1}>
                <img   className='navbarlogo' src="https://dlcdnimgs.asus.com/images/logo/logo-002.svg" alt="" />
            </Grid>

            {isMatch? <DrawerComp links={links}/> :  <Grid item xs={10}>
              
                 
                 <Tabs textColor='black' indicatorColor='secondary'  fontSize="10px" className='Navbartext' >
                 <Mobiledrop/>
                 <Laptopdrop/>
                 <Desktopdraw/>
                 <Motherdraw/>
                 
                 <Networkdraw/>
                 <Accessories/>
                 
                 <button style={{}} >BusinessPCs / Peripherals</button>
                 <Support/>
                 <Shop/>
     
                </Tabs>
            </Grid>}
            <Grid item sx={{color:'black',justifyContent:'space-between'}} xs={1}>
           <ShoppingCartIcon className='logo1'/>
           <SearchIcon className='logo2'/> 
           {isMatch?<></>:< PersonOutlineIcon  className='logo3'/>}
            </Grid>
        </Grid>
        
    </Toolbar>
   </AppBar>


   </div>
  )
}

export default Navbar