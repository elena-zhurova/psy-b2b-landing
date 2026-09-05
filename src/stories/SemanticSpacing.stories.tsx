import type { Meta, StoryObj } from '@storybook/react-vite';

const semanticSpacingTokens = [
  { name: '--semantic-spacing-section-outer-top-md', value: '32 / 40 / 52px', alias: 'responsive semantic spacing' },
  { name: '--semantic-spacing-section-outer-top-lg', value: '40 / 52 / 80px', alias: 'responsive semantic spacing' },
  { name: '--semantic-spacing-section-outer-bottom-md', value: '32 / 40 / 52px', alias: 'responsive semantic spacing' },
  { name: '--semantic-spacing-section-outer-bottom-lg', value: '40 / 52 / 80px', alias: 'responsive semantic spacing' },
  { name: '--semantic-button-padding-x', value: '40px', alias: 'primitives/spacing/40' },
  { name: '--semantic-button-padding-y', value: '20px', alias: 'primitives/spacing/20' },
  { name: '--semantic-bubble-padding-x', value: '20px', alias: 'primitives/spacing/20' },
  { name: '--semantic-bubble-padding-y', value: '8px', alias: 'primitives/spacing/8' },
  { name: '--semantic-surface-padding-x-compact', value: '40px', alias: 'primitives/spacing/40' },
  { name: '--semantic-surface-padding-x-comfortable', value: '80px', alias: 'primitives/spacing/80' },
  { name: '--semantic-surface-padding-y-compact', value: '40px', alias: 'primitives/spacing/40' },
  { name: '--semantic-surface-padding-y-comfortable', value: '80px', alias: 'primitives/spacing/80' },
  { name: '--semantic-surface-gap-compact', value: '40px', alias: 'primitives/spacing/40' },
  { name: '--semantic-surface-gap-comfortable', value: '80px', alias: 'primitives/spacing/80' },
  { name: '--semantic-card-padding-x-compact', value: '8px', alias: 'primitives/spacing/8' },
  { name: '--semantic-card-padding-x-comfortable', value: '20px', alias: 'primitives/spacing/20' },
  { name: '--semantic-card-padding-y-compact', value: '8px', alias: 'primitives/spacing/8' },
  { name: '--semantic-card-padding-y-comfortable', value: '20px', alias: 'primitives/spacing/20' },
  { name: '--semantic-card-gap-compact', value: '20px', alias: 'primitives/spacing/20' },
  { name: '--semantic-card-gap-comfortable', value: '40px', alias: 'primitives/spacing/40' },
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
          gridTemplateColumns: '280px 1fr 112px 180px',
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
