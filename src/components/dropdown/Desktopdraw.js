
import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'
function Desktopdraw() {
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
             
            >Desktop / Displays</button>
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
    <Typography><div className='dropdes'><Grid container>
    
    <Grid item xs={2}></Grid>
    <Grid item xs={5}><table class="uk-tableM">
    <caption></caption>
    <thead>
        <tr>
       
            <td className='t21'>Gaming Tower PCs</td>
            <td className='t2'>BY USE</td>
            <td className='t3'>BY SERIES</td>
          
           
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>

            </td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
          <td className='t21'>All-in-One PCs</td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_forhome_a.svg' alt='' id='td1rog'/><span >For home</span>
         </td>
         <td className='t22'>All series</td>
        </tr>
        <tr>
          <td className='t21'>For creaters</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_forbusiness_a.svg' alt='' id='td1rog'/><span >
        For business
         </span>
         </td>
         <td className='t22'>ROG</td>
        </tr>
        <tr>
          <td className='t21'> Monitors</td>
         <td></td>
          <td className='t22'>ROG strix</td>
          </tr>
          <tr>
          <td className='t21'>Mini PCs</td>
          <td></td>
          <td className='t22'></td>
          </tr>
          <tr>
          <td className='t21'>Workstations</td>
          <td></td>
          <td className='t22'></td>
          </tr>  
    </tbody>
</table>
 </Grid>
    <Grid item xs={4}>
      
    </Grid>
   </Grid>
   </div>
   </Typography>
    </Popover>
          </div>
         
  )
}

export default Desktopdraw