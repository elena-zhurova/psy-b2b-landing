import type { Meta, StoryObj } from '@storybook/react-vite';

const spacingTokens = [
  { name: '--primitives-spacing-0', value: '0px' },
  { name: '--primitives-spacing-8', value: '8px' },
  { name: '--primitives-spacing-20', value: '20px' },
  { name: '--primitives-spacing-40', value: '40px' },
  { name: '--primitives-spacing-52', value: '52px' },
  { name: '--primitives-spacing-60', value: '60px' },
  { name: '--primitives-spacing-80', value: '80px' },
];

const SpacingPreview = () => (
  <div style={{ display: 'grid', gap: '16px', width: '420px' }}>
    {spacingTokens.map((token) => (
      <div
        key={token.name}
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: '12px',
          gridTemplateColumns: '180px 1fr 48px',
        }}
      >
        <code>{token.name}</code>
        <div
          aria-label={`${token.name}: ${token.value}`}
          style={{
            background: 'var(--primitives-color-blue)',
            border: token.value === '0px' ? '1px solid var(--primitives-color-grey)' : '0',
            borderRadius: '2px',
            height: '24px',
            width: `var(${token.name})`,
          }}
        />
        <span>{token.value}</span>
      </div>
    ))}
  </div>
);

const meta = {
  title: 'Foundations/Primitives/Spacing',
  component: SpacingPreview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SpacingPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
