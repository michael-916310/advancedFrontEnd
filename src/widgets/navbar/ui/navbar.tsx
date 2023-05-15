import { classNames } from 'shared/lib/class-names/class-names';
import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link.component';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          {t('Главная')}
        </AppLink>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
