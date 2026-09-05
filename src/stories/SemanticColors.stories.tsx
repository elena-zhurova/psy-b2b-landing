import type { Meta, StoryObj } from '@storybook/react-vite';

const semanticColorTokens = [
  { name: '--semantic-color-surface-background-default', alias: 'direct transparent' },
  { name: '--semantic-color-surface-background-secondary', alias: 'direct #FFFFFF' },
  { name: '--semantic-color-surface-background-accent', alias: 'primitives/color/gradient' },
  { name: '--semantic-color-text-primary', alias: 'direct #050505' },
  { name: '--semantic-color-text-secondary', alias: 'direct #959595' },
  { name: '--semantic-color-text-decor', alias: 'direct #E0E0E0' },
  { name: '--semantic-color-text-inverse', alias: 'direct #FFFFFF' },
  { name: '--semantic-color-link-default', alias: 'direct #005DA0' },
  { name: '--semantic-color-link-hover', alias: 'direct #007FDA' },
  { name: '--semantic-color-link-active', alias: 'direct #005DA0' },
  { name: '--semantic-color-button-background-primary-default', alias: 'direct #050505' },
  { name: '--semantic-color-button-background-anchor-default', alias: 'direct #D8EFFF' },
  { name: '--semantic-color-button-background-secondary', alias: 'direct #F7F7F7' },
  { name: '--semantic-color-button-text-primary-default', alias: 'semantic/color/text/inverse' },
  { name: '--semantic-color-button-text-primary-hover', alias: 'direct #98CCF1' },
  { name: '--semantic-color-bubble-border', alias: 'direct #959595' },
  { name: '--semantic-color-bubble-text', alias: 'semantic/color/text/primary' },
  { name: '--semantic-color-card-background-default', alias: 'direct #FFFFFF' },
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
