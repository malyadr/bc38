import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputField } from ".";
export default {
  title: "molecules / inputField",
  component: InputField,
};
const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const inputField = Template.bind({});
inputField.args = {
  text: "Enter your location",
  variant: "outlined",
  styles: { width: "400px", height: "48px" },
};
