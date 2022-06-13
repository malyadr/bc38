import Header from ".";
import { ComponentStory } from "@storybook/react";
import theme from "../../../theme/customTheme";
import React from "react";
export default {
  title: "organisms/Header",
  component: Header,
};

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}></Header>
);
export const HeaderNav = Template.bind({});

HeaderNav.args = {
    backgroundColor: `${theme.palette.alpha600.main}`,
    text: "East Marredpally, Secunderabad"
}
