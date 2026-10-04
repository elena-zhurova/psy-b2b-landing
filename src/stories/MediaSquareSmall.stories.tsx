import type { Meta, StoryObj } from '@storybook/react-vite';

import psyInformationLotti from '../assets/figma-page/psy-lotti.svg';
import validationLotti from '../assets/figma-page/validation-lotti.svg';
import { MediaSquareSmall } from '../design-system/components';

const meta = {
  title: 'Components/MediaSquareSmall',
  component: MediaSquareSmall,
  parameters: {
    layout: 'centered',
  },
  args: {
    imageAlt: '',
    imageSrc: psyInformationLotti,
  },
} satisfies Meta<typeof MediaSquareSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlternateMedia: Story = {
  args: {
    imageSrc: validationLotti,
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      <MediaSquareSmall imageSrc={psyInformationLotti} />
      <MediaSquareSmall imageSrc={validationLotti} />
    </div>
  ),
};
