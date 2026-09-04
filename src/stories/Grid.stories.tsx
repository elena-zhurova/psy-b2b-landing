import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from '../design-system/layout';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsive: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ padding: 'var(--primitives-spacing-40)' }}>
      <Grid>
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            style={{
              background: 'var(--semantic-color-card-background-default)',
              border: '1px solid var(--semantic-color-border-light)',
              borderRadius: 'var(--semantic-card-radius)',
              padding: 'var(--semantic-card-padding-y-comfortable) var(--semantic-card-padding-x-comfortable)',
            }}
          >
            Grid item {index + 1}
          </div>
        ))}
      </Grid>
    </div>
  ),
};
