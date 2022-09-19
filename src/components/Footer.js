import React from 'react'
import {  Grid } from '@mui/material'
import './Footer.css'
function Footer() {
  return (
    <div>
        <div className='listdivre'>
        <ul className='listdivre'>
                <li className='listhead1'><hr className='hrlistdiv' /></li>
                <li className='headli'><span className='listdivres'>Shop and Learn</span><button className='btlistdiv'>+</button></li>
                <li className='listhead1'><hr className='hrlistdiv1' /></li>
                <li className='headli'>Learn More<button className='btlistdiv1'>+</button></li>
                <li className='listhead1'><hr className='hrlistdiv1' /></li>
                <li className='headli'>Support<button className='btlistdiv2'>+</button> </li>
                <li className='listhead1'><hr className='hrlistdiv1' /></li>
                <li className='headli'>About Us<button className='btlistdiv3'>+</button></li>
                <li className='listhead1'><hr className='hrlistdiv1' /></li>
                </ul>
        </div>
    <div className='footer'>
        
        <Grid container className='foot'>
            <hr />
            <Grid item xs={3} md={3} lg={2}>
               <div className='listdiv1'>
                <ul className='list'>
                <li className='head'>Shop and Learn</li>

                <li className='listhead'>Mobiles</li>
                <li className='listtext'>Phone</li>
                <li className='listhead'>Laptops</li>
                <li className='listtext'>For Home</li>
                <li className='listtext'>For Work</li>
                <li className='listtext'>For Creators</li>
                <li className='listtext'>For Students</li>
                <li className='listtext'>For Gaming</li>
                <li className='listhead'>Desktop / Displays</li>
                <li className='listtext'>Gaming Tower PCs</li>
                <li className='listtext'>All-in-One PCs</li>
                <li className='listtext'>Monitors</li>
                <li className='listtext'>Mini PCs</li>
                </ul>
               </div>
            </Grid>
            <Grid item xs={1} md={3} lg={2}>
            <div className='listdiv'>
                <ul className='list'>
                <li className='listtext'>Workstations</li>
                <li className='listhead'>Motherboards / Components</li>
                <li className='listtext'>Motherboards</li>
                
                <li className='listtext'>Gaming Case</li>
                <li className='listtext'>Cooling</li>
                <li className='listtext'>Graphics Cards</li>
                <li className='listtext'>Power Supply Units</li>
                <li className='listtext'>Sound Cards</li>
                <li className='listhead'>Networking / IoT / Servers</li>
                <li className='listtext'>WiFi Routers</li>
                <li className='listtext'>Whole Home Mesh WiFi System</li>
                
                </ul>
               </div>
            </Grid>
            <Grid item xs={3}md={2} lg={2}>
            <div className='listdiv3'>
                <ul className='list'>
                <li className='listtext'>Industrial Solution</li>
                <li className='listtext'>Servers</li>
                <li className='listhead'>Accessories</li>
              
                
                <li className='listtext'>Keyboards</li>
                <li className='listtext'>Mice and Mouse Pads</li>
                <li className='listtext'>Headsets and Audio</li>
                <li className='listtext'>Bags</li>
                <li className='listtext'>Adapters and Chargers</li>
          
                </ul>
               </div>
            </Grid>
            <Grid item xs={3} md={2} lg={2}>
            <div className='listdiv2'>
                <ul className='list'>
                <li className='head'>Learn More</li>
                <li className='listtext'>Asus Design Center</li>
                <li className='listtext'>ASUSPRO</li>
                <li className='listtext'>Automotive Solutions</li>
                <li className='head1'>Support</li>
                <li className='listtext'>Product Guide</li>
                <li className='listtext'>Check Repair Status</li>
                <li className='listtext'>Check Warranty Status</li>
                <li className='listtext'>Find Service Locations</li>
                <li className='listtext'>Product Registration</li>
                <li className='listtext'>Sales Terms & Conditions</li>
                <li className='listtext'>Email Us</li>
                <li className='listtext'>Call Us</li>
                <li className='listtext'>Security Advisory</li>
                <li className='listtext'>WhatsApp</li>
                <li className='listtext'>ASUS Support Videos</li>
                <li className='listtext'>Where To Buy (Find nearby store)</li>
                <li className='listtext'>MyASUS</li>
                </ul>
               </div>
            </Grid>
            <Grid item xs={2} md={2} lg={1}>
            <div className='listdiv2'>
                <ul className='list'>
               
                <li className='head'>About Us</li>
                <li className='listtext'>About ASUS</li>
                <li className='listtext'>News</li>
                <li className='listtext'>Investor Relations</li>
                <li className='listtext'>About CSR for global</li>
                <li className='listtext'>E-Waste page</li>
                <li className='listtext'>Press Room</li>
                <li className='listtext'>ASUSTOR Inc.</li>
                <li className='listtext'>ASUSTOR Inc.</li>
                <li className='listtext'>UniMax Electronics Inc.</li>
                </ul>
               </div>
            </Grid>
            <Grid item xs={12} md={12} lg={3} className="listgriddiv">
            <div className='listdiv2'>
            <ul className='listflx'>
            <li className='headlast'>Community</li>   
            <li><ul className='inline'>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-facebook.svg" alt="" /></li>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Twitter.svg" alt="" /></li>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-YouTube.svg" alt="" /></li>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Instagram.svg" alt="" /></li>
                <li className='listin'><img style={{width:50,height:50,marginTop:-7}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbASyTa_heiLbSDny8uwB8a0uZUPHp36mr3pHCrxe0A&s=36" alt="" /></li>
            </ul></li> 
            <li><ul className='inline2'>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20210316123617.svg" alt="" /></li>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20210923015618.svg" alt="" /></li>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20220302090047.svg" alt="" /></li>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20210316124006.svg" alt="" /></li>
                </ul></li>
            </ul>
            </div>
            </Grid>
        </Grid>
        
<hr className='linehori' />
<div className='lastfoot'>
    <Grid container className='lastfoo'>
        <Grid item xs={2} md={2} lg={1}>Terms of Use Notice<div className='vl'></div></Grid>
        <Grid item xs={2} md={1} lg={1}> Privacy Policy </Grid>
        <Grid item xs={5} md={4} lg={3}>©ASUSTeK Computer Inc. All rights reserved </Grid>
        <Grid item xs={1} md={2} lg={4}></Grid>
        <Grid item xs={2} md={2} lg={2}> India/English</Grid>

    </Grid>

</div>
    </div>
    <div className='bigli'>
    <ul className='ul' style={{marginTop:10}}>
            <li className='headlast'>Community</li>   
            <li><ul className='inline'>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-facebook.svg" alt="" /></li>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Twitter.svg" alt="" /></li>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-YouTube.svg" alt="" /></li>
                <li className='listin'><img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Instagram.svg" alt="" /></li>
                <li className='listin'><img style={{width:50,height:50,marginTop:-7}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbASyTa_heiLbSDny8uwB8a0uZUPHp36mr3pHCrxe0A&s=36" alt="" /></li>
            </ul></li> 
            <li><ul className='inline2'>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20210316123617.svg" alt="" /></li>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20210923015618.svg" alt="" /></li>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20220302090047.svg" alt="" /></li>
                <li className='listin'><img  style={{width:40,height:40,marginTop:-7}} src="https://www.asus.com/media/Odin/Websites/in/Menu/20210316124006.svg" alt="" /></li>
                </ul></li>
            </ul> 
            <div className='india'>
        <Grid container >
            <Grid item xs={12}>India/English</Grid>
            <Grid item xs={5}>Terms of Use Notice</Grid>
            <Grid item xs={4}>Privacy Policy</Grid>
            <Grid item xs={12}>©ASUSTeK Computer Inc. All rights reserved</Grid>
        </Grid>
    </div>
    </div>
    
    </div>
  )
}

export default Footer
