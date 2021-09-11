import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from './index'

export default {
  title: 'Main Page',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const MainPage = Template.bind({})
