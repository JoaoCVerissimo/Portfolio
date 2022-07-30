import React from 'react'
import { SmallInput } from './'
import { Story, Meta } from '@storybook/react/types-6-0'

type Props = React.ComponentProps<typeof SmallInput>

const csf: Meta = {
  title: 'atoms/SmallInput',
}

const Template: Story<Props> = (args) => <SmallInput {...args} />

export const c1 = Template.bind({})
c1.storyName = 'default'

export default csf
