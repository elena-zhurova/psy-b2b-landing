import type { Meta, StoryObj } from '@storybook/react-vite';

const semanticColorTokens = [
  { name: '--semantic-color-surface-background-default', alias: 'primitives/color/transparent' },
  { name: '--semantic-color-surface-background-secondary', alias: 'primitives/color/white' },
  { name: '--semantic-color-surface-background-accent', alias: 'primitives/color/gradient' },
  { name: '--semantic-color-text-primary', alias: 'primitives/color/black' },
  { name: '--semantic-color-text-secondary', alias: 'primitives/color/grey' },
  { name: '--semantic-color-text-tertiary', alias: 'primitives/color/grey-light' },
  { name: '--semantic-color-text-inverse', alias: 'primitives/color/white' },
  { name: '--semantic-color-text-alert', alias: 'primitives/color/red' },
  { name: '--semantic-color-link-accent-default', alias: 'primitives/color/sapphire' },
  { name: '--semantic-color-link-accent-hover', alias: 'primitives/color/sapphire-light' },
  { name: '--semantic-color-link-accent-active', alias: 'primitives/color/sapphire' },
  { name: '--semantic-color-link-neutral-default', alias: 'primitives/color/black' },
  { name: '--semantic-color-link-neutral-hover', alias: 'primitives/color/sapphire-light' },
  { name: '--semantic-color-link-neutral-active', alias: 'primitives/color/black' },
  { name: '--semantic-color-button-primary-background-default', alias: 'primitives/color/black' },
  { name: '--semantic-color-button-primary-text-default', alias: 'primitives/color/white' },
  { name: '--semantic-color-button-primary-text-hover', alias: 'primitives/color/blue' },
  { name: '--semantic-color-button-utility-background-default', alias: 'primitives/color/grey-superlight' },
  { name: '--semantic-color-button-utility-background-hover', alias: 'primitives/color/blue-light' },
  { name: '--semantic-color-button-secondary-background-default', alias: 'primitives/color/blue-superlight' },
  { name: '--semantic-color-bubble-border', alias: 'primitives/color/grey' },
  { name: '--semantic-color-bubble-text', alias: 'primitives/color/black' },
  { name: '--semantic-color-card-background-default', alias: 'primitives/color/white' },
  { name: '--semantic-color-card-background-accent', alias: 'primitives/color/gradient' },
  { name: '--semantic-color-field-message-default', alias: 'semantic/color/text/primary' },
  { name: '--semantic-color-field-message-error', alias: 'semantic/color/text/alert' },
  { name: '--semantic-color-field-label-default', alias: 'semantic/color/text/primary' },
  { name: '--semantic-color-field-label-disabled', alias: 'semantic/color/text/secondary' },
  { name: '--semantic-color-field-border-default', alias: 'primitives/color/grey' },
  { name: '--semantic-color-field-border-hover', alias: 'primitives/color/sapphire-light' },
  { name: '--semantic-color-field-border-focus', alias: 'primitives/color/sapphire' },
  { name: '--semantic-color-field-border-error', alias: 'primitives/color/red' },
  { name: '--semantic-color-field-border-disabled', alias: 'primitives/color/grey-10' },
  { name: '--semantic-color-field-text-placeholder-default', alias: 'semantic/color/text/secondary' },
  { name: '--semantic-color-field-text-placeholder-hover', alias: 'semantic/color/text/tertiary' },
  { name: '--semantic-color-field-text-value', alias: 'semantic/color/text/primary' },
  { name: '--semantic-color-field-text-disabled', alias: 'semantic/color/text/secondary' },
  { name: '--semantic-color-field-background-default', alias: 'primitives/color/grey-superlight' },
  { name: '--semantic-color-field-background-disabled', alias: 'primitives/color/grey-10' },
  { name: '--semantic-color-field-background-error', alias: 'primitives/color/red-10' },
  { name: '--semantic-color-field-background-focus', alias: 'primitives/color/white' },
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
