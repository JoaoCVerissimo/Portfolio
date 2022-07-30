import React from 'react';
import { LargeInput } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof LargeInput>

const csf: Meta = {
  title: 'atoms/LargeInput',
}

const Template: Story<Props> = (args) => <LargeInput {...args} />;

export const c1 = Template.bind({});
c1.storyName="default"

export default csf
