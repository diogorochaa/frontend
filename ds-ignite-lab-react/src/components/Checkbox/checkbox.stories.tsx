import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar senha</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
