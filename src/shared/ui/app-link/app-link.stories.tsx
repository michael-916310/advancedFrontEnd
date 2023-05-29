import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { AppLink, AppLinkTheme } from './app-link.component';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'text from meta',
    to: './',
  },
};

type Story = StoryObj<typeof AppLink>;

const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
};

const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export {
  Primary, PrimaryDark, Secondary, SecondaryDark, Red, RedDark,
};
export default meta;
