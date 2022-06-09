import TopNavbar from ".";
import { ComponentStory } from "@storybook/react";
import theme from "../../../theme/customTheme";
import React from "react";
export default {
  title: "organisms/TopNavbar",
  component: TopNavbar,
};

const Template: ComponentStory<typeof TopNavbar> = (args) => (
  <TopNavbar {...args}></TopNavbar>
);
export const topNavBar = Template.bind({});

topNavBar.args = {
    backgroundColor: `${theme.palette.alpha600.main}`,
    text: "East Marredpally, Secunderabad"
}
