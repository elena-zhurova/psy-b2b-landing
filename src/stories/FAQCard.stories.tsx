import type { Meta, StoryObj } from '@storybook/react-vite';

import { FAQCard } from '../design-system/components';

const answer =
  'Humanteq работает на основе доказательных подходов:\nкогнитивно-поведенческой терапии (КПТ), диалектической поведенческой терапии (ДБТ)\nи техник саморегуляции.\n\nБот не даёт случайных советов — каждая практика опирается на научно подтверждённые методы\nи встроена в структурированный процесс: разбор ситуации → инсайт → конкретный шаг.';

const meta = {
  title: 'Components/FAQCard',
  component: FAQCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    answer,
    question: 'Какие методики используются?',
    state: 'default',
  },
} satisfies Meta<typeof FAQCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: {
    state: 'hover',
  },
};

export const Active: Story = {
  args: {
    state: 'active',
  },
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <FAQCard question="Какие методики используются?" state="default" />
      <FAQCard question="Какие методики используются?" state="hover" />
      <FAQCard answer={answer} question="Какие методики используются?" state="active" />
    </div>
  ),
};
