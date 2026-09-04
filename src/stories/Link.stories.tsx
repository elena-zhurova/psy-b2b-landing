import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from '../design-system/components';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Узнать больше',
    destination: 'external',
    href: 'https://humanteq.io',
    presentation: 'text',
    state: 'default',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextExternal: Story = {};

export const FilledAnchor: Story = {
  args: {
    destination: 'anchor',
    href: '#form',
    presentation: 'filled',
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <Link href="https://humanteq.io">Default text external</Link>
      <Link href="https://humanteq.io" state="hover">
        Hover text external
      </Link>
      <Link href="https://humanteq.io" state="active">
        Active text external
      </Link>
      <Link destination="anchor" href="#form" presentation="filled">
        Default filled anchor
      </Link>
      <Link destination="anchor" href="#form" presentation="filled" state="hover">
        Hover filled anchor
      </Link>
      <Link destination="anchor" href="#form" presentation="filled" state="active">
        Active filled anchor
      </Link>
    </div>
  ),
};
