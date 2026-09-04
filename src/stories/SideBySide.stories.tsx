import type { Meta, StoryObj } from '@storybook/react-vite';

import { SideBySide } from '../design-system/layout';

const demoBlock = (label: string) => (
  <div
    style={{
      background: 'var(--semantic-color-card-background-default)',
      border: '1px solid var(--semantic-color-border-light)',
      borderRadius: 'var(--semantic-card-radius)',
      minHeight: '180px',
      padding: 'var(--semantic-card-padding-y-comfortable) var(--semantic-card-padding-x-comfortable)',
    }}
  >
    {label}
  </div>
);

const meta = {
  title: 'Layout/SideBySide',
  component: SideBySide,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideBySide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EqualColumns: Story = {
  args: {
    children: null,
    variant: 'equal',
  },
  render: () => (
    <div style={{ padding: 'var(--primitives-spacing-40)' }}>
      <SideBySide variant="equal">
        {demoBlock('Region A')}
        {demoBlock('Region B')}
      </SideBySide>
    </div>
  ),
};

export const MediaText: Story = {
  args: {
    children: null,
    variant: 'mediaText',
  },
  render: () => (
    <div style={{ padding: 'var(--primitives-spacing-40)' }}>
      <SideBySide variant="mediaText">
        <div
          style={{
            aspectRatio: '1',
            background: 'var(--semantic-color-card-background-accent)',
            borderRadius: 'var(--semantic-card-radius)',
            width: 'min(320px, 100%)',
          }}
        />
        {demoBlock('Text region')}
      </SideBySide>
    </div>
  ),
};
