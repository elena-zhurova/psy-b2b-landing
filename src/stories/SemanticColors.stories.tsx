import type { Meta, StoryObj } from '@storybook/react-vite';

const semanticColorTokens = [
  { name: '--semantic-color-surface-background-default', alias: 'primitives/color/transparent' },
  { name: '--semantic-color-surface-background-secondary', alias: 'primitives/color/white' },
  { name: '--semantic-color-surface-background-accent', alias: 'primitives/color/gradient' },
  { name: '--semantic-color-border-light', alias: 'primitives/color/grey' },
  { name: '--semantic-color-text-primary', alias: 'primitives/color/black' },
  { name: '--semantic-color-text-secondary', alias: 'primitives/color/grey' },
  { name: '--semantic-color-text-decor', alias: 'primitives/color/grey-light' },
  { name: '--semantic-color-text-inverse', alias: 'primitives/color/white' },
  { name: '--semantic-color-link-default', alias: 'primitives/color/sapphire' },
  { name: '--semantic-color-link-hover', alias: 'primitives/color/sapphire-light' },
  { name: '--semantic-color-link-active', alias: 'primitives/color/sapphire' },
  { name: '--semantic-color-button-background-primary-default', alias: 'primitives/color/black' },
  { name: '--semantic-color-button-background-anchor-default', alias: 'primitives/color/blue-superlight' },
  { name: '--semantic-color-button-background-secondary', alias: 'primitives/color/grey-superlight' },
  { name: '--semantic-color-button-text-primary-default', alias: 'semantic/color/text/inverse' },
  { name: '--semantic-color-button-text-primary-hover', alias: 'primitives/color/blue' },
  { name: '--semantic-color-bubble-border', alias: 'primitives/color/grey' },
  { name: '--semantic-color-bubble-text', alias: 'semantic/color/text/primary' },
  { name: '--semantic-color-card-background-default', alias: 'primitives/color/white' },
  { name: '--semantic-color-card-background-accent', alias: 'primitives/color/gradient' },
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
