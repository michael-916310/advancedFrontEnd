import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Navbar } from 'widgets/navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar,
};

type Story = StoryObj<typeof Navbar>;

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
