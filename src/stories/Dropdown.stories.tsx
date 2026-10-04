import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dropdown } from '../design-system/components';

const options = [
  { label: 'До 50 человек', value: 'up-to-50' },
  { label: '50 – 200', value: '50-200' },
  { label: '200 – 1000', value: '200-1000' },
  { label: '1000 +', value: '1000-plus' },
];

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  args: {
    helperMessage: 'Укажите имя и фамилию',
    label: 'Размер команды',
    message: true,
    options,
    value: 'up-to-50',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: {
    interaction: 'hover',
  },
};

export const OpenWithOptions: Story = {
  name: 'Open with Dropdown Options',
  args: {
    interaction: 'open',
  },
};

export const OpenWithoutMessage: Story = {
  name: 'Open with Dropdown Options Without Message',
  args: {
    interaction: 'open',
    message: false,
  },
};

export const WithoutMessage: Story = {
  args: {
    message: false,
  },
};

export const All: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '20px', maxWidth: '514px', width: 'calc(100vw - 32px)' }}>
      <Dropdown {...args} />
      <Dropdown {...args} interaction="hover" />
      <Dropdown {...args} interaction="open" />
      <Dropdown {...args} interaction="open" message={false} />
    </div>
  ),
};
