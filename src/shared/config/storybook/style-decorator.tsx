import 'app/styles/index.scss';
import { ReactRenderer } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';

const StyleDecorator = (Story: PartialStoryFn<ReactRenderer, { [p: string]: any }>) => <Story />;

export { StyleDecorator };
