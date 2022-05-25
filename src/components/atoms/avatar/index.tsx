import { Avatar } from '@mui/material'
import React from 'react'
import avatar from '../../../assets/Avatar.jpg'


const AvatarComp = ()=> {
    return (
        <>
         <Avatar src={avatar} data-testid="avatar" />
        </>
        
       
        
    );
}

export default AvatarComp
