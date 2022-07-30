import React from 'react'
import { SmallButton } from './'
import { Story, Meta } from '@storybook/react/types-6-0'

type Props = React.ComponentProps<typeof SmallButton>

const csf: Meta = {
  title: 'atoms/SmallButton',
}

const Template: Story<Props> = (args) => <SmallButton {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf
