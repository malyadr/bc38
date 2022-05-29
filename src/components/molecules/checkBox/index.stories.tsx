import React from "react";
import { ComponentStory } from "@storybook/react";

import ControlledCheckbox from ".";

export default {
  title: "Molecules/Checkbox",
  component: ControlledCheckbox,
};

const Template: ComponentStory<typeof ControlledCheckbox> = (args) => (
  <ControlledCheckbox {...args} />
);

export const CheckBox = Template.bind({});

CheckBox.args = {
  defaultChecked: true,
};
