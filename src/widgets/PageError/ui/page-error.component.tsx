import { classNames } from 'shared/lib/class-names/class-names';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/button.component';
import cls from './page-error.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла ошибка')}</p>
      <Button onClick={reload}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export { PageError };
