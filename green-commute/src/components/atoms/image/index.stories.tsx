import Img from "."
import { ComponentStory } from '@storybook/react';
import img1 from '../../../assets/images/Group 105.jpg';
import img2 from '../../../assets/images/Group 10.jpg';
import img3 from '../../../assets/images/Group 72.jpg';
import img4 from '../../../assets/images/image 7.jpg';
import img5 from '../../../assets/images/image 8.jpg';
import img6 from '../../../assets/images/image 11.jpg';
import img7 from '../../../assets/images/image 13.jpg';
import img8 from '../../../assets/images/image 15.jpg';
import img9 from '../../../assets/images/image 16.jpg';
import img10 from '../../../assets/images/AirQualityIndex.svg';

import React from "react";


export default {
    title: "atoms/image",
    component: Img,
};

const Template: ComponentStory<typeof Img> = (args) => <Img {...args}/>;

export const Image1 = Template.bind({})
export const Image2 = Template.bind({})
export const Image3 = Template.bind({})
export const Image4 = Template.bind({})
export const Image5 = Template.bind({})
export const Image6 = Template.bind({})
export const Image7 = Template.bind({})
export const Image8 = Template.bind({})
export const Image9 = Template.bind({})
export const Image10 = Template.bind({})
Image1.args = {
    src:img1,
    
}
Image2.args={
    src:img2,
}
Image3.args={
    src:img3,
}
Image4.args={
    src:img4,
}
Image5.args={
    src:img5,
}
Image6.args={
    src:img6,
}
Image7.args={
    src:img7,
}
Image8.args={
    src:img8,
}
Image9.args={
    src:img9,
}
Image10.args={
    src:img10,
}