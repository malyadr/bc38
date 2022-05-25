import React from "react";
import { ReactSVG } from "react-svg";

type IconProps = {
    src: string,
    sx?: any,
    onClick?: any
};


const Icon = (props: IconProps) => {
    return <ReactSVG data-testid="icon" src={props.src} ></ReactSVG>
};

export default Icon;