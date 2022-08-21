import React from 'react'
import { Layout } from './'
import { Story, Meta } from '@storybook/react/types-6-0'

type Props = React.ComponentProps<typeof Layout>

const csf: Meta = {
  title: 'templates/Layout',
}

const Template: Story<Props> = (args) => <Layout {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf
