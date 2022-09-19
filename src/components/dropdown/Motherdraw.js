import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'

function Motherdraw() {
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
             
            >Motherboards / Components</button>
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
    <Typography><div className='dropmobile'><Grid container>
    
    <Grid item xs={2}></Grid>
    <Grid item xs={5}><table class="uk-tableM">
    <caption></caption>
    <thead>
        <tr>
        

            <td className='t1mother'> Motherboards</td>
            <td className='t2mother'>BY CHIPSET BRAND</td>
            <td className='t3mother'>BY SERIES</td>
        
           
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
          <td className='t21'>Single Board Computer</td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_intel_a.svg' alt='' id='td1rog'/><span >Intel</span>
         </td>
         <td className='t22'>All series</td>
        </tr>
        <tr>
          <td className='t21'>Gaming Case</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_amd_a.svg' alt='' id='td1rog'/><span >
       AMD
         </span>
         </td>
         <td className='t22'>PRIME</td>
        </tr>
        <tr>
          <td className='t21'> Cooling</td>
          <td className='t21'> 
         </td>
          <td className='t22'>ProArt</td>
          </tr>
          <tr>
          <td className='t21'>Graphics Cards</td>
          <td></td>
          <td className='t22'>Workstation</td>
          </tr>
          <tr>
          <td className='t21'>Power Supply Units
</td>
          <td></td>
          <td className='t22'>ROG - Republic of Gamers</td>
          </tr>
          <tr>
          <td className='t21'>Sound Cards</td>
          <td></td>
          <td className='t22'>TUF Gaming
</td>
          </tr>
          
<tr>
          <td className='t21'>Optical Drives</td>
          <td></td>
          <td className='t22'>CSM (Corporate Stable Model)
</td>
          </tr>
                 
<tr>
          <td className='t21'></td>
          <td></td>
          <td className='t22'>Business</td>
          </tr>
          <tr>
          <td className='t21'></td>
          <td></td>
          <td className='t22'>Expedition</td>
          </tr>
          <tr>
          <td className='t21'></td>
          <td></td>
          <td className='t22'>Others</td>
          </tr>
          <tr>
          <td className='t21'></td>
          <td></td>
          <td className='t22'>All series - Inte</td>
          </tr>
         

       
    </tbody>
</table>
 </Grid>
    <Grid item xs={4}>
        <ul>
            <li> 
                <div className='drawla'>
                <img className="drawlap"src="https://dlcdnwebimgs.asus.com/gain/8166816a-fa44-4461-871f-4a6017434769/w185/fwebp" alt="" />
                <h6 className='drawlaph6'>TUF Gaming Z590-plus WIFI</h6>
                </div>
            </li>
            <li>
            <div className='drawla'>
                <img className="drawlap" src="https://www.asus.com/media/global/gallery/bt7d7txjhkd4wfs0_setting_xxx_0_90_end_185.png" alt="" />
                <h6 className='drawlaph61'>TUF Gaming X570-plus (WI-FI)</h6>
                </div>
            </li>
        </ul>
    </Grid>
   </Grid>
   </div>
   </Typography>
    </Popover>
          </div>
         
  )
}

export default Motherdraw