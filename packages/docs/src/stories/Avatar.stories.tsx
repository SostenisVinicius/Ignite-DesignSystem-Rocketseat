import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@sostenis-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/SostenisVinicius.png',
    alt: 'Sostenis Vinicius',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
