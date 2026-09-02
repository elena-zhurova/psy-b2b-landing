import type { Meta, StoryObj } from '@storybook/react-vite';

const semanticColorTokens = [
  { name: '--semantic-color-surface-default', alias: 'primitives/color/white' },
  { name: '--semantic-color-border-light', alias: 'primitives/color/grey' },
  { name: '--semantic-color-text-primary', alias: 'primitives/color/black' },
  { name: '--semantic-color-text-secondary', alias: 'primitives/color/grey' },
  { name: '--semantic-color-text-decor', alias: 'primitives/color/grey-light' },
  { name: '--semantic-color-text-inverse', alias: 'primitives/color/white' },
];

const SemanticColors = () => (
  <div style={{ display: 'grid', gap: '12px', width: '620px' }}>
    {semanticColorTokens.map((token) => (
      <div
        key={token.name}
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: '56px 1fr 180px',
        }}
      >
        <div
          aria-label={token.name}
          style={{
            background: `var(${token.name})`,
            border: '1px solid var(--primitives-color-grey-light)',
            borderRadius: 'var(--primitives-radius-8)',
            height: '40px',
            width: '56px',
          }}
        />
        <code>{token.name}</code>
        <span>{token.alias}</span>
      </div>
    ))}
  </div>
);

const meta = {
  title: 'Foundations/Semantic/Colors',
  component: SemanticColors,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SemanticColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
