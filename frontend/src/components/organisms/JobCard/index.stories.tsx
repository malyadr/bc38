import React from "react";
import { ComponentStory } from "@storybook/react";
import { JobCard } from ".";
export default {
  title: "molecules / JobCard",
  component: JobCard,
};
const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const jobCard = Template.bind({});
jobCard.args = {
  src: "hp",
  role: "User Experience Designer",
  companyName: "HP",
  location: "Hyderabad, Telangana, India",
  time: "1hr 36 mins ago",
};
