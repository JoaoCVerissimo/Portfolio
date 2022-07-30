import React from 'react'
import { MediumButton } from './'
import { Story, Meta } from '@storybook/react/types-6-0'

type Props = React.ComponentProps<typeof MediumButton>

const csf: Meta = {
  title: 'atoms/MediumButton',
}

const Template: Story<Props> = (args) => <MediumButton {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf
