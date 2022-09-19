import {React,useState} from 'react'
import {Tab} from '@mui/material'
import './Mobile.css'
import {Popover,Typography }from '@mui/material';
import Banner from './Banner';
import Griditem from './Griditem';
import { style } from '@mui/system';
import Mobiledrawer from './dropdown/Mobiledrawer';
function Mobiledrop() {
  const [anchorEl, setAnchorEl] =useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null)
  };
  const open = Boolean(anchorEl);

  return (
    <div>
       
<button style={{color:'black'}}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        hover={true}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
         
        >Mobile</button>
        <Popover
          
 transformOrigin={{
  vertical: 'top',
  horizontal: 'left',
}}
open={anchorEl}
anchorEl={anchorEl}
anchorOrigin={{
  vertical: 'bottom',
  horizontal: 'left',
  
}}
sx={{
  pointerEvents: 'none',
}}
onClose={handlePopoverClose}
disableRestoreFocus
>
<Typography><Mobiledrawer/></Typography>
</Popover>
      </div>
      
  )
}

export default Mobiledrop