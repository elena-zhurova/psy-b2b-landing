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
    presentation: 'accent-underlined',
    state: 'default',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    presentation: 'accent',
  },
};

export const AccentUnderlined: Story = {};

export const Neutral: Story = {
  args: {
    presentation: 'neutral',
  },
};

export const Destinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px', justifyItems: 'start' }}>
      <Link destination="external" href="https://humanteq.io" presentation="accent-underlined">External destination</Link>
      <Link destination="anchor" href="#form" presentation="accent-underlined">Anchor destination</Link>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      {(['accent', 'accent-underlined', 'neutral'] as const).map((presentation) => (
        <div
          key={presentation}
          style={{
            alignItems: 'center',
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: '160px repeat(3, 1fr)',
          }}
        >
          <strong>{presentation}</strong>
          <Link href="https://humanteq.io" presentation={presentation}>Default</Link>
          <Link href="https://humanteq.io" presentation={presentation} state="hover">Hover</Link>
          <Link href="https://humanteq.io" presentation={presentation} state="active">Active</Link>
        </div>
      ))}
    </div>
  ),
};

export const InheritedTypography: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '24px', maxWidth: '720px' }}>
      <p
        style={{
          fontFamily: 'var(--semantic-type-body-normal-font-family)',
          fontSize: 'var(--semantic-type-body-normal-font-size)',
          fontWeight: 'var(--semantic-type-body-normal-font-weight)',
          lineHeight: 'var(--semantic-type-body-normal-line-height)',
          margin: 0,
        }}
      >
        Body context: <Link href="https://humanteq.io" presentation="accent-underlined">accent underlined link</Link>
      </p>
      <p
        style={{
          fontFamily: 'var(--semantic-type-heading-sm-font-family)',
          fontSize: 'var(--semantic-type-heading-sm-font-size)',
          fontWeight: 'var(--semantic-type-heading-sm-font-weight)',
          lineHeight: 'var(--semantic-type-heading-sm-line-height)',
          margin: 0,
        }}
      >
        Heading context: <Link href="https://humanteq.io" presentation="neutral">neutral link</Link>
      </p>
    </div>
  ),
};
