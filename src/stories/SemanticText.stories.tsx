import type { Meta, StoryObj } from '@storybook/react-vite';

const textRoles = [
  {
    name: 'semantic/type/button',
    sample: 'Сделать первый шаг',
    style: {
      fontFamily: 'var(--semantic-type-button-font-family)',
      fontSize: 'var(--semantic-type-button-font-size)',
      fontWeight: 'var(--semantic-type-button-font-weight)',
      letterSpacing: 'var(--semantic-type-button-letter-spacing)',
      lineHeight: 'var(--semantic-type-button-line-height)',
    },
  },
  {
    name: 'semantic/type/decor/number',
    sample: '70%',
    style: {
      fontFamily: 'var(--semantic-type-decor-number-font-family)',
      fontSize: 'var(--semantic-type-decor-number-font-size)',
      fontStyle: 'var(--semantic-type-decor-number-font-style)',
      fontWeight: 'var(--semantic-type-decor-number-font-weight)',
      letterSpacing: 'var(--semantic-type-decor-number-letter-spacing)',
      lineHeight: 'var(--semantic-type-decor-number-line-height)',
    },
  },
  {
    name: 'semantic/type/decor/initial',
    sample: 'Пример текста',
    style: {
      fontFamily: 'var(--semantic-type-decor-initial-font-family)',
      fontSize: 'var(--semantic-type-decor-initial-font-size)',
      fontStyle: 'var(--semantic-type-decor-initial-font-style)',
      fontWeight: 'var(--semantic-type-decor-initial-font-weight)',
      letterSpacing: 'var(--semantic-type-decor-initial-letter-spacing)',
      lineHeight: 'var(--semantic-type-decor-initial-line-height)',
    },
  },
  {
    name: 'semantic/type/decor/heading',
    sample: 'истории',
    style: {
      fontFamily: 'var(--semantic-type-decor-heading-font-family)',
      fontSize: 'var(--semantic-type-decor-heading-font-size)',
      fontStyle: 'var(--semantic-type-decor-heading-font-style)',
      fontWeight: 'var(--semantic-type-decor-heading-font-weight)',
      letterSpacing: 'var(--semantic-type-decor-heading-letter-spacing)',
      lineHeight: 'var(--semantic-type-decor-heading-line-height)',
    },
  },
  {
    name: 'semantic/type/heading/lg',
    sample: 'Реальные истории пользователей',
    style: {
      fontFamily: 'var(--semantic-type-heading-lg-font-family)',
      fontSize: 'var(--semantic-type-heading-lg-font-size)',
      fontWeight: 'var(--semantic-type-heading-lg-font-weight)',
      letterSpacing: 'var(--semantic-type-heading-lg-letter-spacing)',
      lineHeight: 'var(--semantic-type-heading-lg-line-height)',
    },
  },
  {
    name: 'semantic/type/heading/sm',
    sample: 'Какие методики используются?',
    style: {
      fontFamily: 'var(--semantic-type-heading-sm-font-family)',
      fontSize: 'var(--semantic-type-heading-sm-font-size)',
      fontWeight: 'var(--semantic-type-heading-sm-font-weight)',
      letterSpacing: 'var(--semantic-type-heading-sm-letter-spacing)',
      lineHeight: 'var(--semantic-type-heading-sm-line-height)',
    },
  },
  {
    name: 'semantic/type/description/normal',
    sample: 'Humanteq помогает человеку сделать первый шаг к разговору.',
    style: {
      fontFamily: 'var(--semantic-type-description-normal-font-family)',
      fontSize: 'var(--semantic-type-description-normal-font-size)',
      fontWeight: 'var(--semantic-type-description-normal-font-weight)',
      letterSpacing: 'var(--semantic-type-description-normal-letter-spacing)',
      lineHeight: 'var(--semantic-type-description-normal-line-height)',
    },
  },
  {
    name: 'semantic/type/description/accent',
    sample: 'Humanteq помогает человеку сделать первый шаг к разговору.',
    style: {
      fontFamily: 'var(--semantic-type-description-accent-font-family)',
      fontSize: 'var(--semantic-type-description-accent-font-size)',
      fontWeight: 'var(--semantic-type-description-accent-font-weight)',
      letterSpacing: 'var(--semantic-type-description-accent-letter-spacing)',
      lineHeight: 'var(--semantic-type-description-accent-line-height)',
    },
  },
  {
    name: 'semantic/type/body/normal',
    sample: 'Бот не даёт случайных советов, а ведёт пользователя по структурированному процессу.',
    style: {
      fontFamily: 'var(--semantic-type-body-normal-font-family)',
      fontSize: 'var(--semantic-type-body-normal-font-size)',
      fontWeight: 'var(--semantic-type-body-normal-font-weight)',
      letterSpacing: 'var(--semantic-type-body-normal-letter-spacing)',
      lineHeight: 'var(--semantic-type-body-normal-line-height)',
    },
  },
];

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
    <div style={{ display: 'grid', gap: '20px' }}>
      {textRoles.map((role) => (
        <section
          key={role.name}
          style={{
            borderBottom: '1px solid var(--primitives-color-grey-light)',
            display: 'grid',
            gap: '8px',
            paddingBottom: '20px',
          }}
        >
          <code>{role.name}</code>
          <p
            style={{
              color: 'var(--semantic-color-text-primary)',
              margin: 0,
              ...role.style,
            }}
          >
            {role.sample}
          </p>
        </section>
      ))}
    </div>

    <section
      style={{
        border: '1px solid var(--semantic-color-border-light)',
        borderRadius: 'var(--primitives-radius-8)',
        padding: 'var(--semantic-surface-padding-x-compact)',
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
