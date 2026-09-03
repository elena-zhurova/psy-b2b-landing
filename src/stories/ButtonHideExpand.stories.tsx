import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonHideExpand } from '../design-system/components';

const meta = {
  title: 'Components/Button/HideExpand',
  component: ButtonHideExpand,
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'Показать ответ',
    role: 'to-expand',
  },
} satisfies Meta<typeof ButtonHideExpand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToExpand: Story = {};

export const ToHide: Story = {
  args: {
    'aria-label': 'Скрыть ответ',
    role: 'to-hide',
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ButtonHideExpand aria-label="Показать ответ" role="to-expand" />
      <ButtonHideExpand aria-label="Скрыть ответ" role="to-hide" />
    </div>
  ),
};
