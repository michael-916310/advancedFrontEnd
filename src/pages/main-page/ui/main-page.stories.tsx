import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import MainPage from './main-page.component';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

type Story = StoryObj<typeof MainPage>;

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
