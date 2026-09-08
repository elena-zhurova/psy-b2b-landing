import type { Meta, StoryObj } from '@storybook/react-vite';

const colorTokens = [
  { name: '--primitives-color-black', value: '#050505' },
  { name: '--primitives-color-blue', value: '#98CCF1' },
  { name: '--primitives-color-blue-light', value: '#C2E5FD' },
  { name: '--primitives-color-blue-superlight', value: '#D8EFFF' },
  { name: '--primitives-color-grey', value: '#959595' },
  { name: '--primitives-color-grey-10', value: '#959595 / 10%' },
  { name: '--primitives-color-grey-light', value: '#E0E0E0' },
  { name: '--primitives-color-grey-superlight', value: '#F7F7F7' },
  { name: '--primitives-color-red', value: '#FF0000' },
  { name: '--primitives-color-red-10', value: '#FF0000 / 10%' },
  { name: '--primitives-color-sapphire', value: '#005DA0' },
  { name: '--primitives-color-sapphire-light', value: '#007FDA' },
  { name: '--primitives-color-transparent', value: 'transparent' },
  { name: '--primitives-color-white', value: '#FFFFFF' },
  { name: '--primitives-color-white-60', value: '#FFFFFF / 60%' },
  { name: '--primitives-color-gradient', value: 'gradient' },
];

const FoundationColors = () => (
  <div style={{ display: 'grid', gap: '12px', width: '520px' }}>
    {colorTokens.map((token) => (
      <div
        key={token.name}
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: '56px 1fr 84px',
        }}
      >
        <div
          aria-label={`${token.name}: ${token.value}`}
          style={{
            background: `var(${token.name})`,
            border: '1px solid var(--primitives-color-grey-light)',
            borderRadius: 'var(--primitives-radius-8)',
            height: '40px',
            width: '56px',
          }}
        />
        <code>{token.name}</code>
        <span>{token.value}</span>
      </div>
    ))}
  </div>
);

const meta = {
  title: 'Foundations/Primitives/Colors',
  component: FoundationColors,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FoundationColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
