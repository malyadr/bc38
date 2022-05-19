import React from "react";
import { ComponentStory } from "@storybook/react";
import { Chips } from ".";
export default {
  title: "molecules / chips",
  component: Text,
};
const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />;

export const chips = Template.bind({});
chips.args = {
  color: "gammaColor1",
  text: "Hyderabad",
  variant: "caption2",
};
