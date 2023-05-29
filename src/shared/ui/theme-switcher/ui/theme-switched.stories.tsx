import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
};

type Story = StoryObj<typeof ThemeSwitcher>;

const Primary: Story = {
  args: {},
};

const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export {
  Primary, PrimaryDark,
};
export default meta;
