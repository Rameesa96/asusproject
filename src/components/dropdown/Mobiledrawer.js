import React from 'react'
import {Grid,Typography} from '@mui/material'
import'./Mobiledrawer.css'
import {ClearIcon} from '@mui/icons-material';
function Mobiledrawer() {
  return (
    <div className='dropmobile'>
   <Grid container>
    
    <Grid item xs={3}></Grid>
    <Grid item xs={5}><table class="uk-tableM">
    <caption></caption>
    <thead>
        <tr>
       
            <td className='t1'>Phone</td>
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
          <td></td>
            <td className='t21'> <img style={{color:'black'}} src='https://www.asus.com/media/Odin/images/Category/icon_18_rogphone_a.svg' alt='' id='td1rog'/><span >Rog Phone</span>
         </td>
         <td className='t22'>ROG phone 6 Pro</td>
        </tr>
        <tr>
          <td></td>
          <td className='t21'> <img style={{color:'black'}}src='https://www.asus.com/media/Odin/Websites/in/ProductLine/20210707050042.png' alt='' id='td1rog'/><span >
         Snapdragon Insiders
         </span>
         </td>
         <td className='t22'>ROG phone 6 </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className='t22'>Azuz 8z</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td className='t22'>ROG phone 5S pro</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td className='t22'>ROG phone 5s</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td className='t22'>ROG phone 5 ultimate</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td className='t22'>ROG phone 5</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td className='t22'>ROG phone lll</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td className='t22'>Smart phone for Snapdragon insiders</td>
          </tr>
          <div class="vl"></div>
          <div class="vl"></div>
    </tbody>

</table></Grid>
    <Grid item xs={4}></Grid>
   </Grid>
   
  </div>
  )
}

export default Mobiledrawer