import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./card";
import { CaretRight, FileArrowDown } from "phosphor-react";

export default {
  title: "Example/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Show = Template.bind({});
Show.args = {
  title: "Card",
  children: <FileArrowDown size={40} />,
  description:
    "Acesse o material complementar para acelerar o seu desenvolvimento",
  icon: <CaretRight size={24} />,
};
