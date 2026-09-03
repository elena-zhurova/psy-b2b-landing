import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../design-system/components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Сделать первый шаг',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Anchor: Story = {
  args: {
    variant: 'anchor',
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Button variant="primary">Сделать первый шаг</Button>
      <Button variant="anchor">Сделать первый шаг</Button>
    </div>
  ),
};
