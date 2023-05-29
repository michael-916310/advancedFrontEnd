import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'app/providers/theme-provider';
import { NotFoundPage } from 'pages/not-found-page';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

type Story = StoryObj<typeof NotFoundPage>;

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
