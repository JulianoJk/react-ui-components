import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropzoneComponent, IDropzoneComponentProps } from '../src/index';

const meta: Meta = {
  title: 'Dropzone',
  component: DropzoneComponent,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IDropzoneComponentProps> = args => (
  <DropzoneComponent {...args} />
);
const images = [
  'image/png',
  'image/gif',
  'image/jpeg',
  'image/svg+xml',
  'image/webp',
];

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  dropzoneLabel: 'DROP IMAGES HER',
  acceptedUpload: file => {
    console.log('ACCEPTER');
  },
  rejectedUpload: () => {
    console.log('rejected!');
  },
  acceptFiles: images,
  this: 'image',
};
