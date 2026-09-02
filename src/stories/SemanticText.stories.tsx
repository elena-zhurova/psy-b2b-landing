import type { Meta, StoryObj } from '@storybook/react-vite';

const modeRows = [
  {
    mode: 'narrow',
    range: '320-640px',
    primitive: '--primitives-type-size-32',
    value: '32px',
  },
  {
    mode: 'medium',
    range: '641-1279px',
    primitive: '--primitives-type-size-40',
    value: '40px',
  },
  {
    mode: 'wide',
    range: '1280px+',
    primitive: '--primitives-type-size-48',
    value: '48px',
  },
];

const SemanticHeadingPreview = () => (
  <div style={{ display: 'grid', gap: '24px', maxWidth: '760px' }}>
    <section
      style={{
        border: '1px solid var(--semantic-color-border-light)',
        borderRadius: 'var(--primitives-radius-8)',
        padding: 'var(--semantic-spacing-surface-comfortable)',
      }}
    >
      <p
        style={{
          color: 'var(--semantic-color-text-secondary)',
          fontSize: '14px',
          margin: '0 0 12px',
        }}
      >
        Live semantic token
      </p>
      <h1
        style={{
          color: 'var(--semantic-color-text-primary)',
          fontSize: 'var(--semantic-text-heading)',
          letterSpacing: 'var(--primitives-type-letter-spacing-normal)',
          lineHeight: 'var(--primitives-type-line-height-110)',
          margin: 0,
        }}
      >
        semantic/text/heading
      </h1>
    </section>

    <div style={{ display: 'grid', gap: '12px' }}>
      {modeRows.map((row) => (
        <div
          key={row.mode}
          style={{
            alignItems: 'center',
            borderBottom: '1px solid var(--primitives-color-grey-light)',
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: '88px 120px 1fr 56px',
            paddingBottom: '12px',
          }}
        >
          <strong>{row.mode}</strong>
          <span>{row.range}</span>
          <code>{row.primitive}</code>
          <span>{row.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const meta = {
  title: 'Foundations/Semantic/Text/Heading',
  component: SemanticHeadingPreview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SemanticHeadingPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponsiveModes: Story = {};
