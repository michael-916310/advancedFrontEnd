import 'app/styles/index.scss';
import { ReactRenderer } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';
import { Theme } from 'app/providers/theme-provider';

const ThemeDecorator = (theme: Theme) => (
  Story: PartialStoryFn<ReactRenderer, { [p: string]: any }>,
) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);

export { ThemeDecorator };
