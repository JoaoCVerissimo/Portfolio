import React from 'react';
import { MediumInput } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof MediumInput>

const csf: Meta = {
  title: 'atoms/MediumInput',
}

const Template: Story<Props> = (args) => <MediumInput {...args} />;

export const c1 = Template.bind({});
c1.storyName="default"

export default csf
