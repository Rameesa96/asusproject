import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'


function Networkdraw() {
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
             
            >Networking / IoT / Servers</button>
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
    <Grid item xs={4}><table class="uk-tableM">
    <caption></caption>
    <thead>
        <tr>
        

            <td className='t1network'>WiFi 6</td>
            <td className='t2network'>BY CHIPSET BRAND</td>
            
           
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
          <td className='t21'>WiFi Routers</td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_wifirouters_a.svg' alt='' id='td1rog'/><span >WIFI Routers</span>
         </td>
       
        </tr>
        <tr>
          <td className='t21'>Whole Home Mesh WiFi System</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_meshwifi_a.svg' alt='' id='td1rog'/><span >
          Whole Home Mesh WiFi System
         </span>
         </td>
 
        </tr>
        <tr>
          <td className='t21'> Wireless & Wired Adapters</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_wirelessadapterswifi6_a.svg' alt='' id='td1rog'/><span >
        Wireless Adapters
         </span>
         </td>
          </tr>
          <tr>
          <td className='t21'>AIoT & Industrial Solution</td>
          <td></td>
         
          </tr>
          <tr>
          <td className='t21'>Servers</td>
          <td></td>

          </tr>
          
          <div class="vl"></div>
        <div class="v2"></div>
    </tbody>
</table>
 </Grid>
    <Grid item xs={4}>
        <ul>
            <li> 
                <div className='drawla'>
                <img className="drawlap"src="https://dlcdnwebimgs.asus.com/gain/94f54914-6cf7-4446-baf5-9bc5520767cb/w185/fwebp" alt="" />
                <h6 className='drawlaph6'>ASUS Zen WiFi AX (XT8)</h6>
                </div>
            </li>
            <li>
            <div className='drawla'>
                <img className="drawlap" src="https://dlcdnwebimgs.asus.com/gain/a3631a89-05a9-48ea-8e71-ef4082a73058/w185/fwebp" alt="" />
                <h6 className='drawlaph61'> RT-AX 82u</h6>
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

export default Networkdraw