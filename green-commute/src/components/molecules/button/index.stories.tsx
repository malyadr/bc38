import React from "react";
import { ComponentStory } from "@storybook/react";
import { Button1 } from ".";
export default {
  title: "molecules / button",
  component: Button1,
};
const Template: ComponentStory<typeof Button1> = (args) => (
  <Button1 {...args} />
);

export const button = Template.bind({});
button.args = {
  variant: "caption1",
  buttonVariant: "contained",
  customStyle: { color: "white", textTransform: "none" },
  buttonColor: "alpha400",
  children: "Save",
};
