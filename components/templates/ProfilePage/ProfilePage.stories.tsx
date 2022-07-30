import React from 'react';
import { ProfilePage } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof ProfilePage>

const csf: Meta = {
  title: 'templates/ProfilePage',
}

const Template: Story<Props> = (args) => <ProfilePage {...args} />;

export const c1 = Template.bind({});
c1.storyName="default"

export default csf
