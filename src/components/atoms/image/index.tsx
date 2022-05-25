import React from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


interface imgProps {
    
    src: any,
   
}

const Img = ({src}:imgProps) => {
   
    return (
    <>
     <img src={src}  data-testid="img" alt="no image"/>
    </>

    )
   
    
}

export default Img;