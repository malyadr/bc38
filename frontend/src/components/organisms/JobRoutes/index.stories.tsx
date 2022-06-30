import React from "react";
import { ComponentStory } from "@storybook/react";
import { Routes } from ".";
export default {
  title: "organisms / Routes",
  component: Routes,
};
const Template: ComponentStory<typeof Routes> = () => <Routes />;

export const jobRoutes = Template.bind({});

