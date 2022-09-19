
import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'
function Support() {
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
             
            >Support</button>
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
    <Typography><div className='dropsupport'><table class="uk-tableM">
    <caption></caption>

    <tbody>
        <tr>
          <td className='t21'>Support
</td>
           
        </tr>
        <tr>
         
         <td className='t22'>Service center
</td>
        </tr>
        <tr>
          <td className='t21'> Check warranty status
</td>
        
          </tr>
          <tr>
          <td className='t21'>Check repair status
</td>
          
          </tr>
          <tr>
          <td className='t21'>ZenTalk
</td>
          
          </tr>  
          <tr>
<td className='t21'>
WhatsApp
</td>
          
</tr>  
<tr>
<td className='t21'>

Drivers and manuals
</td>
          </tr>
         <tr>
          <td className='t21'>MyASUS</td>
         
          </tr>  
    </tbody>
</table>

   </div>
   </Typography>
    </Popover>
          </div>
         
  )
}

export default Support