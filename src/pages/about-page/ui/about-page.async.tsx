import { lazy } from 'react';

const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./about-page.component')), 1500);
}));

export { AboutPageAsync };
