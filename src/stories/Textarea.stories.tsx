import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from '../design-system/components';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  args: {
    helperMessage: 'Укажите имя и фамилию',
    label: 'Сообщение',
    message: true,
    placeholder: 'Пример или подсказка',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEmpty: Story = {};

export const HoverEmpty: Story = {
  args: {
    interaction: 'hover',
  },
};

export const FocusEmpty: Story = {
  args: {
    interaction: 'focus',
  },
};

export const DefaultFilled: Story = {
  args: {
    content: 'filled',
  },
};

export const All: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '20px', maxWidth: '516px', width: 'calc(100vw - 32px)' }}>
      <Textarea {...args} />
      <Textarea {...args} interaction="hover" />
      <Textarea {...args} interaction="focus" />
      <Textarea {...args} content="filled" />
    </div>
  ),
};
