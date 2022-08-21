import React from 'react'
import { Homepage } from './'
import { Story, Meta } from '@storybook/react/types-6-0'

type Props = React.ComponentProps<typeof Homepage>

const csf: Meta = {
  title: 'pages/Homepage',
}

const Template: Story<Props> = (args) => <Homepage {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf
