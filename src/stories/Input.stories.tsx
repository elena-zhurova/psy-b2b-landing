import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../design-system/components';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Компания',
    placeholder: 'Название компании',
    helperMessage: 'Укажите имя и фамилию',
    errorMessage: 'Проверьте правильность заполнения поля',
    message: true,
  },
} satisfies Meta<typeof Input>;

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

export const HoverFilled: Story = {
  args: {
    content: 'filled',
    interaction: 'hover',
  },
};

export const FocusFilled: Story = {
  args: {
    content: 'filled',
    interaction: 'focus',
  },
};

export const ErrorFilled: Story = {
  args: {
    content: 'filled',
    validation: 'error',
  },
};

export const ErrorHoverFilled: Story = {
  args: {
    content: 'filled',
    interaction: 'hover',
    validation: 'error',
  },
};

export const ErrorFocusBehavior: Story = {
  args: {
    content: 'filled',
    interaction: 'focus',
    validation: 'error',
  },
};

export const DisabledEmpty: Story = {
  args: {
    availability: 'disabled',
  },
};

export const DisabledFilled: Story = {
  args: {
    availability: 'disabled',
    content: 'filled',
  },
};

export const DisabledErrorFilled: Story = {
  args: {
    availability: 'disabled',
    content: 'filled',
    validation: 'error',
  },
};

export const AllMeaningfulStates: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        maxWidth: '723px',
        width: 'calc(100vw - 32px)',
      }}
    >
      <Input {...args} />
      <Input {...args} interaction="hover" />
      <Input {...args} interaction="focus" />
      <Input {...args} content="filled" />
      <Input {...args} content="filled" interaction="hover" />
      <Input {...args} content="filled" interaction="focus" />
      <Input {...args} content="filled" validation="error" />
      <Input {...args} content="filled" interaction="hover" validation="error" />
      <Input {...args} content="filled" interaction="focus" validation="error" />
      <Input {...args} availability="disabled" />
      <Input {...args} availability="disabled" content="filled" />
      <Input {...args} availability="disabled" content="filled" validation="error" />
    </div>
  ),
};
