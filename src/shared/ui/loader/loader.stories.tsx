import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { Loader } from './loader.component';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
};

type Story = StoryObj<typeof Loader>;

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
