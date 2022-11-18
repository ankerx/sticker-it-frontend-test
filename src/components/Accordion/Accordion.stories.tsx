import { Story } from "@storybook/react";
import { Accordion, Props } from "./Accordion";

export default {
  title: "Atoms/Accordion",
  component: Accordion,
};

const Template: Story<Props> = (args) => <Accordion {...args} />;
export const Default = Template.bind({});

Default.args = {
  label: "Some catchy title",
  content: { id: "1", type: "open" },
};
