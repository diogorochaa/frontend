import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInputInput, TextInputIcon, TextInputRoot } from ".";
import type { TextInputRootProps } from ".";

export default {
  title: "Components/TextInput",
  component: TextInputRoot,
  args: {
    children: (
      <>
        <TextInputIcon>
          <Envelope />
        </TextInputIcon>
        <TextInputInput placeholder="Placeholder" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInputInput placeholder="Placeholder" />,
  },
};
