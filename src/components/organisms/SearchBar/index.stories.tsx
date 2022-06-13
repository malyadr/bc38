import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import JobSearch from "./index";
export default {
  title: "Organisms/SearchBar",
  component: JobSearch,
} as ComponentMeta<typeof JobSearch>;

const Template: ComponentStory<typeof JobSearch> = () => (
  <JobSearch  />
);

export const searchBar = Template.bind({});

