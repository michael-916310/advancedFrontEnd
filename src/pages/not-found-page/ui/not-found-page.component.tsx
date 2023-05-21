import { classNames } from 'shared/lib/class-names/class-names';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};

export { NotFoundPage };
