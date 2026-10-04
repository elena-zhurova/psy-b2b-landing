import type { Meta, StoryObj } from '@storybook/react-vite';

import specialistPhoto from '../assets/specialists/natalia-vladykina.png';
import { SpecialistCard } from '../design-system/components';

const meta = {
  title: 'Components/SpecialistCard',
  component: SpecialistCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    bio: 'Психолог, кандидат психологических наук, когнитивно-поведенческий терапевт, преподаватель. Автор более 50 научных и научно-популярных публикаций.',
    imageSrc: specialistPhoto,
    name: ['Владыкина', 'Наталья Петровна'],
  },
} satisfies Meta<typeof SpecialistCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ResponsiveWidth: Story = {
  render: (args) => (
    <div style={{ maxWidth: '500px', minWidth: '300px', width: 'calc(100vw - 40px)' }}>
      <SpecialistCard {...args} />
    </div>
  ),
};
