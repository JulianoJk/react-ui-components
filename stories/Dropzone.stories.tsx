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
const maxSizeFiles = 2 * 1024 ** 2;
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  onDrop: acceptedFile => {
    console.log(acceptedFile);
  },
  onReject: rejectedFile => {
    console.log(rejectedFile);
    console.log('rejected!');
  },
  acceptFiles: images,

  maxSize: { maxSizeFiles },
  maxFiles: 2,
  name: 'DROP IMAGES HERE',
  // disabled={props.disabled ?? undefined}
  // loading={props.loading ?? undefined}

  // multiple={props.multiple ?? undefined}
};
