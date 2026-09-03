import type { Meta, StoryObj } from '@storybook/react-vite';

import { Bubble } from '../design-system/components';

const meta = {
  title: 'Components/Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Сделать первый шаг',
  },
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px', justifyItems: 'start' }}>
      <Bubble size="lg">Сделать первый шаг</Bubble>
      <Bubble size="md">Сделать первый шаг</Bubble>
    </div>
  ),
};
