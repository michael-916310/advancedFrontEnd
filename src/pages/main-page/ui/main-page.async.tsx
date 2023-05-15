import { lazy } from 'react';

const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./main-page.component')), 1500);
}));

export { MainPageAsync };
