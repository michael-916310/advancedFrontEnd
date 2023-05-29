import 'app/styles/index.scss';
import { ReactRenderer } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (Story: PartialStoryFn<ReactRenderer, { [p: string]: any }>) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export { RouterDecorator };
