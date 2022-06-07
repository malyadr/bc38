import React from "react";
import { ComponentStory } from "@storybook/react";
import SavedJobCard  from ".";
export default {
  title: "molecules / SavedJobCard",
  component: SavedJobCard,
};
const Template: ComponentStory<typeof SavedJobCard> = (args) => (
  <SavedJobCard {...args} />
);

export const jobCard = Template.bind({});
jobCard.args = {
  src: "hp",
  role: "User Experience Designer",
  companyName: "HP",
  location: "Hyderabad, Telangana, India",
  time: "1hr 36 mins ago",
};