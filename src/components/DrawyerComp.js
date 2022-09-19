import React, { useState } from 'react'
import { Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText,List} from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import AddIcon from '@mui/icons-material/Add';
import './Draw.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';
function DrawerComp({links}) {
   const [open,setOpen] = useState(false)
  return (

    <>
   
    <Drawer open={open} onClose={()=>{setOpen(false)}}>
    <CloseIcon onClick={()=>{setOpen(false)}} sx={{top:0,position:'fixed'}}/>
    <hr className='hrdraw' sx={{position:'fixed'}}/>
        <List className='lis'>
        {links.map((link,index)=>(<ListItemButton>
            <ListItemIcon>
                <ListItemText>
                  <div>{link } <AddIcon sx={{right:20,position:'fixed'}} /></div> 
              </ListItemText>
            </ListItemIcon>
        </ListItemButton>
))}
        </List>
        <span  > <PersonOutlineIcon sx={{left:10,position:'fixed'}}/><div className='accounttext'>My Account</div></span>
        <hr className='hrdraw' sx={{position:'fixed'}}/>
        <span className='accounttex'>Gaming</span>
        <span><img src="	https://www.asus.com/media/Odin/images/header/rog-gray_h.svg" alt="" /></span>
       
    </Drawer>
    <IconButton  onClick={()=>{setOpen(!open)}}>
        <DragHandleIcon sx={{left:10,position:'fixed'}}/>
    </IconButton>
    </>
  )
}

export default DrawerComp