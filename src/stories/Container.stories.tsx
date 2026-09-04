import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from '../design-system/layout';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Container>
      <div
        style={{
          background: 'var(--semantic-color-card-background-accent)',
          borderRadius: 'var(--semantic-card-radius)',
          padding: 'var(--semantic-card-padding-y-comfortable) var(--semantic-card-padding-x-comfortable)',
        }}
      >
        Container: max 1600px, centered, responsive horizontal padding
      </div>
    </Container>
  ),
};
