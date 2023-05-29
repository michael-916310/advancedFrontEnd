import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Button, ThemeButton } from './button.component';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

const Primary: Story = {
  args: {
    children: 'text',
  },
};

const Clear: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.CLEAR,
  },
};

const Outline: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
};

const OutlineDark: Story = {
  args: {
    children: 'text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export {
  Primary, Clear, Outline, OutlineDark,
};
export default meta;
