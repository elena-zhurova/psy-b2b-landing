import type { Meta, StoryObj } from '@storybook/react-vite';

const semanticSpacingTokens = [
  { name: '--semantic-spacing-surface-compact', value: '20px', alias: 'primitives/spacing/20' },
  { name: '--semantic-spacing-surface-comfortable', value: '40px', alias: 'primitives/spacing/40' },
  { name: '--semantic-spacing-section-outer-top-md', value: '52px', alias: 'primitives/spacing/52' },
  { name: '--semantic-spacing-section-outer-top-lg', value: '80px', alias: 'primitives/spacing/80' },
  { name: '--semantic-spacing-section-outer-bottom-md', value: '52px', alias: 'primitives/spacing/52' },
  { name: '--semantic-spacing-section-outer-bottom-lg', value: '80px', alias: 'primitives/spacing/80' },
];

const SemanticSpacing = () => (
  <div style={{ display: 'grid', gap: '16px', width: '680px' }}>
    {semanticSpacingTokens.map((token) => (
      <div
        key={token.name}
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: '14px',
          gridTemplateColumns: '280px 1fr 56px 160px',
        }}
      >
        <code>{token.name}</code>
        <div
          aria-label={`${token.name}: ${token.value}`}
          style={{
            background: 'var(--semantic-color-text-decor)',
            borderRadius: '2px',
            height: '24px',
            width: `var(${token.name})`,
          }}
        />
        <span>{token.value}</span>
        <span>{token.alias}</span>
      </div>
    ))}
  </div>
);

const meta = {
  title: 'Foundations/Semantic/Spacing',
  component: SemanticSpacing,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SemanticSpacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
