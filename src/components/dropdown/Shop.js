
import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'
function Shop() {
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
             
            >Shop</button>
            <Popover
              
     transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
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
    <Typography><div className='dropshop'><table class="uk-tableM">
    <caption></caption>

    <tbody>
        <tr>
          <td className='t21'>ASUS eSHOP

</td>
           
        </tr>
       
        <tr>
          <td className='t21'> Store Locator

</td>
        
          </tr>
          <tr>
          <td className='t21'>Offers
</td>
          
          </tr>
           
    </tbody>
</table>

   </div>
   </Typography>
    </Popover>
          </div>
         
  )
}

export default Shop