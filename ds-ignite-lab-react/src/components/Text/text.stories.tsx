import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomText: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Custom component</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
