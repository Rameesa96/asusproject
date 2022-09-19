import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'


function Accessories() {
    const [anchorEl, setAnchorEl] =useState(null);
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
      setAnchorEl(null)
    };
    const open = Boolean(anchorEl);
  
  return (
    <div> <div>
       
    <button style={{color:'black'}}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            hover={true}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
             
            >Accessories</button>
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
       
            <td className='t1acce'>Keyboards</td>
            <td className='t2acce'>BY CATEGORY</td>
            <td className='t3acce'>BY SERIES</td>
            
           
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
          <td className='t21'>Mice and Mouse Pads</td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_wirekeyboard_a.svg' alt='' id='td1rog'/><span >Wired Keyboards</span>
         </td>
         <td className='t22'>All series</td>
        </tr>
        <tr>
          <td className='t21'>Headsets and Audio
</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_mechanicalkey_a.svg' alt='' id='td1rog'/><span >
       Mechanical Keyboards
         </span>
         </td>
         <td className='t22'>ROG - Republic of Gamers
</td>
        </tr>
        <tr>
          <td className='t21'>Streaming Kit</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_membranekkey_a.svg' alt='' id='td1rog'/><span >
   Membrane Keyboards
         </span>
         </td>
          <td className='t22'>TUF Gaming</td>
          </tr>
          <tr>
          <td className='t21'>Bags</td>
          <td></td>
          <td className='t22'></td>
          </tr>
          <tr>
          <td className='t21'>Adapters and Chargers</td>
          <td></td>
          <td className='t22'></td>
          </tr>
          <tr>
          <td className='t21'>Docks, Dongles and Cable</td>
          <td></td>
          <td className='t22'></td>
          </tr>
          <tr>
          <td className='t21'>Stylus</td>
          <td></td>
          <td className='t22'></td>
          </tr>
          <tr>
          <td className='t21'>Controllers</td>
          <td></td>
          <td className='t22'></td>
          </tr>
          <tr>
          <td className='t21'>Display Accessorie</td>
          <td></td>
          <td className='t22'></td>
          </tr>
         
         
          
       
    </tbody>
</table>
 </Grid>
    <Grid item xs={4}>
        <ul>
            <li> 
                <div className='drawla'>
                <img className="drawlap"src="https://dlcdnwebimgs.asus.com/gain/17b38f2d-d2e5-4952-b0ea-c99181fbde04/w185/fwebp" alt="" />
                <h6 className='drawlaph6'>TUF Gaming K3</h6>
                </div>
            </li>
            <li>
            <div className='drawla'>
                <img className="drawlap" src="https://dlcdnwebimgs.asus.com/gain/8f37ce63-3fa8-4c36-9e36-13961fcca762/w185/fwebp" alt="" />
                <h6 className='drawlaph61'>TUF Gaming K1</h6>
                </div>
            </li>
        </ul>
    </Grid>
   </Grid>
   </div>
   </Typography>
    </Popover>
          </div>
         </div>
  )
}

export default Accessories