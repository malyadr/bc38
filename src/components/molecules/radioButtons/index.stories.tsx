import React from "react";
import { ComponentStory } from "@storybook/react";

import RadioButtons from ".";

export default {
  title: "Molecules/Radio",
  component: RadioButtons,
};

const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

export const RadioButton = Template.bind({});

RadioButton.args = {
  value: "yes",
};