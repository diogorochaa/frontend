import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@diroc-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {},
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
