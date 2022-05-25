import React from "react";
import { ComponentStory } from "@storybook/react";
import Popup from ".";
import FileUploader from "../fileUploader";

export default {
  title: "Molecules/Popup",
  component: Popup,
};

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const ApplyPopup = Template.bind({});

ApplyPopup.args = {
  children: <FileUploader />,
};
