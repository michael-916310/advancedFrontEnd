import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Sidebar } from 'widgets/sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
};

type Story = StoryObj<typeof Sidebar>;

const Light: Story = {
  args: {},
};

const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export {
  Light, Dark,
};
export default meta;
