import type { Meta, StoryObj } from '@storybook/react-vite';

const typeSizes = [
  { name: '--primitives-type-size-16', value: '16px' },
  { name: '--primitives-type-size-20', value: '20px' },
  { name: '--primitives-type-size-24', value: '24px' },
  { name: '--primitives-type-size-28', value: '28px' },
  { name: '--primitives-type-size-32', value: '32px' },
  { name: '--primitives-type-size-40', value: '40px' },
  { name: '--primitives-type-size-44', value: '44px' },
  { name: '--primitives-type-size-48', value: '48px' },
  { name: '--primitives-type-size-60', value: '60px' },
  { name: '--primitives-type-size-64', value: '64px' },
];

const typeMeta = [
  { name: '--primitives-type-letter-spacing-normal', value: '0' },
  { name: '--primitives-type-line-height-110', value: '110%' },
  { name: '--primitives-type-line-height-140', value: '140%' },
];

const typeFamilies = [
  { name: '--primitives-type-family-primary', value: 'TT Chocolates VF Trial', fontStyle: 'normal' },
  { name: '--primitives-type-family-decor', value: 'TT Livret Trial Italic Variable', fontStyle: 'italic' },
];

const typeStyles = [
  { name: 'primitives/type/style/regular', value: 'Regular' },
  { name: 'primitives/type/style/medium', value: 'Medium' },
  { name: 'primitives/type/style/demibold', value: 'DemiBold' },
  { name: '--primitives-type-style-text-italic', value: 'italic' },
];

const typeWeights = [
  { name: '--primitives-type-weight-regular', value: '400' },
  { name: '--primitives-type-weight-medium', value: '500' },
  { name: '--primitives-type-weight-demibold', value: '600' },
];

const FoundationTypography = () => (
  <div style={{ display: 'grid', gap: '28px', maxWidth: '760px' }}>
    <section style={{ display: 'grid', gap: '14px' }}>
      {typeFamilies.map((token) => (
        <div
          key={token.name}
          style={{
            alignItems: 'baseline',
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: '260px 1fr',
          }}
        >
          <code>{token.name}</code>
          <span
            style={{
              fontFamily: `var(${token.name}), sans-serif`,
              fontSize: 'var(--primitives-type-size-32)',
              fontStyle: token.fontStyle,
              lineHeight: 'var(--primitives-type-line-height-110)',
            }}
          >
            {token.value}
          </span>
        </div>
      ))}
    </section>

    <section style={{ display: 'grid', gap: '18px' }}>
      {typeSizes.map((token) => (
        <div
          key={token.name}
          style={{
            alignItems: 'baseline',
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: '220px 64px 1fr',
          }}
        >
          <code>{token.name}</code>
          <span>{token.value}</span>
          <span
            style={{
              color: 'var(--primitives-color-black)',
              fontSize: `var(${token.name})`,
              lineHeight: 'var(--primitives-type-line-height-110)',
            }}
          >
            Aa
          </span>
        </div>
      ))}
    </section>

    <section style={{ display: 'grid', gap: '14px' }}>
      <strong>Figma text styles kept as export</strong>
      {typeStyles.map((token) => (
        <div
          key={token.name}
          style={{
            alignItems: 'baseline',
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: '260px 120px 1fr',
          }}
        >
          <code>{token.name}</code>
          <span>{token.value}</span>
          <span
            style={{
              color: 'var(--semantic-color-text-secondary)',
              fontSize: '14px',
            }}
          >
            not used for font-weight
          </span>
        </div>
      ))}
    </section>

    <section style={{ display: 'grid', gap: '14px' }}>
      <strong>Local font weights used by text roles</strong>
      {typeWeights.map((token) => (
        <div
          key={token.name}
          style={{
            alignItems: 'baseline',
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: '260px 120px 1fr',
          }}
        >
          <code>{token.name}</code>
          <span>{token.value}</span>
          <span
            style={{
              fontFamily: 'var(--primitives-type-family-primary), sans-serif',
              fontSize: 'var(--primitives-type-size-28)',
              fontWeight: `var(${token.name})`,
              lineHeight: 'var(--primitives-type-line-height-110)',
            }}
          >
            Aa Regular Medium DemiBold
          </span>
        </div>
      ))}
    </section>

    <section style={{ display: 'grid', gap: '10px' }}>
      {typeMeta.map((token) => (
        <div
          key={token.name}
          style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: '260px 1fr',
          }}
        >
          <code>{token.name}</code>
          <span>{token.value}</span>
        </div>
      ))}
    </section>
  </div>
);

const meta = {
  title: 'Foundations/Primitives/Typography',
  component: FoundationTypography,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FoundationTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
