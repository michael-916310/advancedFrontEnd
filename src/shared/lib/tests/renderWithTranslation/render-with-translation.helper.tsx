import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nForTest from 'shared/config/i18n/i18n.for-tests';
import { I18nextProvider } from 'react-i18next';

function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>
      {component}
    </I18nextProvider>,
  );
}

export { renderWithTranslation };
