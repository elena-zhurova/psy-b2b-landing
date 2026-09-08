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
    name: 'semantic/type/heading/md',
    sample: 'Сотрудник',
    style: {
      fontFamily: 'var(--semantic-type-heading-md-font-family)',
      fontSize: 'var(--semantic-type-heading-md-font-size)',
      fontWeight: 'var(--semantic-type-heading-md-font-weight)',
      letterSpacing: 'var(--semantic-type-heading-md-letter-spacing)',
      lineHeight: 'var(--semantic-type-heading-md-line-height)',
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
    name: 'semantic/type/heading/tn',
    sample: 'Компания',
    style: {
      fontFamily: 'var(--semantic-type-heading-tn-font-family)',
      fontSize: 'var(--semantic-type-heading-tn-font-size)',
      fontWeight: 'var(--semantic-type-heading-tn-font-weight)',
      letterSpacing: 'var(--semantic-type-heading-tn-letter-spacing)',
      lineHeight: 'var(--semantic-type-heading-tn-line-height)',
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
  {
    name: 'semantic/type/body/caption',
    sample: 'Укажите имя и фамилию',
    style: {
      fontFamily: 'var(--semantic-type-body-caption-font-family)',
      fontSize: 'var(--semantic-type-body-caption-font-size)',
      fontWeight: 'var(--semantic-type-body-caption-font-weight)',
      letterSpacing: 'var(--semantic-type-body-caption-letter-spacing)',
      lineHeight: 'var(--semantic-type-body-caption-line-height)',
    },
  },
];

const responsiveRows = [
  { mode: 'narrow', range: '320-640px' },
  { mode: 'medium', range: '641-1279px' },
  { mode: 'wide', range: '1280px+' },
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

    <div style={{ display: 'grid', gap: '12px' }}>
      {responsiveRows.map((row) => (
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
          <span style={{ gridColumn: 'span 2' }}>
            Resize the Storybook viewport to verify semantic font-size values.
          </span>
        </div>
      ))}
    </div>
  </div>
);

const meta = {
  title: 'Foundations/Semantic/Text',
  component: SemanticHeadingPreview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SemanticHeadingPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponsiveModes: Story = {};
