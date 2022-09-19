
import {React,useState} from 'react'
import {Popover,Typography }from '@mui/material';
import {Grid} from '@mui/material'
import'./Mobiledrawer.css'
import Divider from '@mui/material/Divider';

function Laptopdrop() {
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
             
            >Laptops</button>
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
       
            <td className='t1'>For Home</td>
            <td className='t2'>BY CATEGORY</td>
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
          <td className='t21'>For work</td>
            <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_flylaptop_a.svg' alt='' id='td1rog'/><span >Thin and light</span>
         </td>
         <td className='t22'>All series</td>
        </tr>
        <tr>
          <td className='t21'>For creaters</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_oled_a.svg' alt='' id='td1rog'/><span >
        OLED Category
         </span>
         </td>
         <td className='t22'>Vivobook</td>
        </tr>
        
        <tr>
          <td className='t21'> For Sudents</td>
          <td className='t21'> <img src='https://www.asus.com/media/Odin/images/Category/icon_18_everydayuse_a.svg' alt='' id='td1rog'/><span >
       Everyday use
         </span>
         </td>
          <td className='t22'>Chromebooks</td>
          </tr>
          <tr>
          <td className='t21'>For Gaming</td>
          <td></td>
          <td className='t22'>Everyday use</td>
          </tr>
          <tr>
          <td className='t21'>Windows 11</td>
          <td></td>
          <td className='t22'>TUF Gaming</td>
          </tr>
          <tr>
          <td className='t21'>Warranty</td>
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
                <img className="drawlap"src="https://www.asus.com/media/global/gallery/6zzgcnq3e5xgsss0_setting_xxx_0_90_end_185.png" alt="" />
                <h6 className='drawlaph6'>Vivobook 15 X513(11th gen intel)</h6>
                </div>
            </li>
            <li>
            <div className='drawla'>
                <img className="drawlap" src="https://dlcdnwebimgs.asus.com/gain/3c2b1ef6-cbcb-4d15-b379-cc1b1c97f808/w185/fwebp" alt="" />
                <h6 className='drawlaph61'>Vivobook Flip 14 TP470</h6>
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

export default Laptopdrop