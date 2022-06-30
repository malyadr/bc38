import AvatarComp from "./index";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from "react";
export default {
    title: "Atoms/Avatar",
    component: AvatarComp,
  }as ComponentMeta<typeof AvatarComp>;
  
  const ButtonTemplate:ComponentStory<typeof AvatarComp> = () => (
    <AvatarComp/>
  );
  
  export const primaryAvatar = ButtonTemplate.bind({});
 