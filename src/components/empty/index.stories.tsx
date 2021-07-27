import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Empty } from '../';

export default {
  title: 'Example/Empty',
  component: Empty
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   // description: ''
// };

