import { Story } from "@storybook/react";

import { AccordionDetails, Props } from "./AccordionDetails";

export default {
  title: "Atoms/AccordionDetails",
  component: AccordionDetails,
};

const Template: Story<Props> = (args) => <AccordionDetails {...args} />;
export const Default = Template.bind({});

Default.args = {
  content: {
    id: "1",
    iconUrl:
      "https://v3-media.stickerit.co/64227/1649140530-clear-sticker-product-icon.png?auto=format&w=48",
    subtitle: "Subtitle",
    title: "Some title",
  },
};
