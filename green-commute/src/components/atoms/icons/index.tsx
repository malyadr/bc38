import React, { Fragment } from 'react'
interface IconsProps{
    src:string;

}
const Icons = ({src}:IconsProps) => {
  return (
<>
<img src={src}/>
</>
   
    )
}

export default Icons