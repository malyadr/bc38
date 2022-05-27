import React from "react";
import { ComponentStory } from "@storybook/react";
import { CommonRoutes } from ".";
export default {
  title: "molecules / CommonRoutes",
  component: CommonRoutes,
};
const Template: ComponentStory<typeof CommonRoutes> = (args) => (
  <CommonRoutes {...args} />
);

export const commonRoutes = Template.bind({});
commonRoutes.args = {
  from: "E Marredpally, Secunderabad",
  to: "Hitech City, Telanagana, Hyderabad.",
};
