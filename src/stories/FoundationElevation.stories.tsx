import type { Meta, StoryObj } from '@storybook/react-vite';

const FoundationElevation = () => (
  <div
    style={{
      border: '1px solid var(--primitives-color-grey-light)',
      borderRadius: 'var(--primitives-radius-8)',
      color: 'var(--semantic-color-text-secondary)',
      maxWidth: '520px',
      padding: 'var(--semantic-surface-padding-x-compact)',
    }}
  >
    <h2
      style={{
        color: 'var(--semantic-color-text-primary)',
        fontSize: 'var(--primitives-type-size-24)',
        lineHeight: 'var(--primitives-type-line-height-110)',
        margin: '0 0 12px',
      }}
    >
      Elevation tokens
    </h2>
    <p style={{ margin: 0 }}>
      Elevation is part of the Foundation architecture, but the current
      primitives token JSON does not include elevation tokens yet.
    </p>
  </div>
);

const meta = {
  title: 'Foundations/Primitives/Elevation',
  component: FoundationElevation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FoundationElevation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
