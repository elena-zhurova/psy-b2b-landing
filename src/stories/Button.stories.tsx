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

export const Secondary: Story = {
  args: {
    children: 'Сделать первый шаг',
    href: '#start',
    variant: 'secondary',
  },
};

export const SecondaryHover: Story = {
  args: {
    children: 'Сделать первый шаг',
    href: '#start',
    state: 'hover',
    variant: 'secondary',
  },
};

export const UtilityIconDefault: Story = {
  name: 'Utility Icon Default',
  args: {
    'aria-label': 'Показать',
    icon: 'plus',
    variant: 'utility-icon',
  },
};

export const UtilityIconHover: Story = {
  name: 'Utility Icon Hover',
  args: {
    'aria-label': 'Показать',
    icon: 'plus',
    state: 'hover',
    variant: 'utility-icon',
  },
};

export const All: Story = {
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <Button variant="primary">Сделать первый шаг</Button>
      <Button href="#start" variant="secondary">Сделать первый шаг</Button>
      <Button aria-label="Показать" variant="utility-icon" />
      <Button aria-label="Показать" state="hover" variant="utility-icon" />
    </div>
  ),
};

export const UtilityIconWithDifferentIcons: Story = {
  name: 'Utility Icon Content Examples',
  render: () => (
    <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
      <Button aria-label="Показать" icon="plus" variant="utility-icon" />
      <Button aria-label="Скрыть" icon="to-close" variant="utility-icon" />
    </div>
  ),
};
