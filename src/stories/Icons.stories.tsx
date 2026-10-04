import type { Meta, StoryObj } from '@storybook/react-vite';

import burgerIcon from '../assets/header/burger.svg';
import closeIcon from '../assets/header/close.svg';
import iconArrowDown from '../design-system/assets/icon-arrow-down.svg';
import iconPlus from '../design-system/assets/icon-plus.svg';
import iconToClose from '../design-system/assets/icon-to-close.svg';

const icons = [
  {
    group: 'Design System',
    items: [
      { name: 'arrow-down', src: iconArrowDown },
      { name: 'plus', src: iconPlus },
      { name: 'to-close', src: iconToClose },
    ],
  },
  {
    group: 'Header',
    items: [
      { name: 'burger', src: burgerIcon },
      { name: 'close', src: closeIcon },
    ],
  },
];

const meta = {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '32px' }}>
      {icons.map((group) => (
        <section key={group.group}>
          <h2
            style={{
              fontFamily: 'var(--semantic-type-heading-sm-font-family)',
              fontSize: 'var(--semantic-type-heading-sm-font-size)',
              fontWeight: 'var(--semantic-type-heading-sm-font-weight)',
              letterSpacing: 'var(--semantic-type-heading-sm-letter-spacing)',
              lineHeight: 'var(--semantic-type-heading-sm-line-height)',
              margin: '0 0 20px',
            }}
          >
            {group.group}
          </h2>
          <div
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            }}
          >
            {group.items.map((icon) => (
              <article
                key={icon.name}
                style={{
                  alignItems: 'center',
                  border: '1px solid var(--semantic-color-card-border-standard)',
                  borderRadius: 'var(--semantic-card-radius)',
                  boxSizing: 'border-box',
                  display: 'flex',
                  gap: '12px',
                  minHeight: '72px',
                  padding: '16px',
                }}
              >
                <span
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '20px',
                    justifyContent: 'center',
                    width: '20px',
                  }}
                >
                  <img alt="" src={icon.src} style={{ display: 'block', height: '20px', width: '20px' }} />
                </span>
                <span
                  style={{
                    fontFamily: 'var(--semantic-type-body-normal-font-family)',
                    fontSize: 'var(--semantic-type-body-normal-font-size)',
                    fontWeight: 'var(--semantic-type-body-normal-font-weight)',
                    letterSpacing: 'var(--semantic-type-body-normal-letter-spacing)',
                    lineHeight: 'var(--semantic-type-body-normal-line-height)',
                  }}
                >
                  {icon.name}
                </span>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
