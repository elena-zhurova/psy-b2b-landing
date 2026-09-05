import type { Meta, StoryObj } from '@storybook/react-vite';

const SemanticStates = () => (
  <div
    style={{
      border: '1px solid var(--primitives-color-grey)',
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
      State tokens
    </h2>
    <p style={{ margin: 0 }}>
      State tokens are not present in the current Semantic token JSON yet. This
      page reserves the Storybook section for hover, focus, active, disabled, and
      validation states when they are added to the source tokens.
    </p>
  </div>
);

const meta = {
  title: 'Foundations/Semantic/States',
  component: SemanticStates,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SemanticStates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
