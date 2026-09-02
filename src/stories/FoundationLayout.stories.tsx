import type { Meta, StoryObj } from '@storybook/react-vite';

const layoutModes = [
  {
    mode: 'narrow',
    range: '320-640px',
    tokens: '--layout-mode-narrow-min-width / --layout-mode-narrow-max-width',
  },
  {
    mode: 'medium',
    range: '641-1279px',
    tokens: '--layout-mode-medium-min-width / --layout-mode-medium-max-width',
  },
  {
    mode: 'wide',
    range: '1280px+',
    tokens: '--layout-mode-wide-min-width',
  },
];

const FoundationLayout = () => (
  <div style={{ display: 'grid', gap: '14px', width: '680px' }}>
    {layoutModes.map((item) => (
      <div
        key={item.mode}
        style={{
          alignItems: 'center',
          border: '1px solid var(--primitives-color-grey-light)',
          borderRadius: 'var(--primitives-radius-8)',
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: '88px 120px 1fr',
          padding: '16px',
        }}
      >
        <strong>{item.mode}</strong>
        <span>{item.range}</span>
        <code>{item.tokens}</code>
      </div>
    ))}
  </div>
);

const meta = {
  title: 'Foundations/Primitives/Layout',
  component: FoundationLayout,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FoundationLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modes: Story = {};
