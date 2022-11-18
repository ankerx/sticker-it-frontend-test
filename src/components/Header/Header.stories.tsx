import { Story } from "@storybook/react";
import { Header } from "./Header";
export default {
  title: "Molecules/Header",
  component: Header,
};

const Template: Story = () => <Header />;
export const Default = Template.bind({});
