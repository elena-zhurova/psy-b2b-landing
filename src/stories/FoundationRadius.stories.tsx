import type { Meta, StoryObj } from '@storybook/react-vite';

const radiusTokens = [
  { name: '--primitives-radius-8', value: '8px' },
  { name: '--primitives-radius-20', value: '20px' },
  { name: '--primitives-radius-30', value: '30px' },
  { name: '--primitives-radius-9999', value: '9999px' },
];

const FoundationRadius = () => (
  <div style={{ display: 'grid', gap: '18px', width: '460px' }}>
    {radiusTokens.map((token) => (
      <div
        key={token.name}
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: '190px 92px 1fr',
        }}
      >
        <code>{token.name}</code>
        <span>{token.value}</span>
        <div
          aria-label={`${token.name}: ${token.value}`}
          style={{
            background: 'var(--primitives-color-blue-light)',
            border: '1px solid var(--primitives-color-blue)',
            borderRadius: `var(${token.name})`,
            height: '64px',
            width: '96px',
          }}
        />
      </div>
    ))}
  </div>
);

const meta = {
  title: 'Foundations/Primitives/Radius',
  component: FoundationRadius,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FoundationRadius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
