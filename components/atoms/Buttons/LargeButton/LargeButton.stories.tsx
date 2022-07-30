import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { LargeButton } from './'

type Props = React.ComponentProps<typeof LargeButton>

const csf: Meta = {
  title: 'atoms/LargeButton',
}

const Template: Story<Props> = (args) => <LargeButton {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf
