import { classNames } from "shared/lib/class-names/class-names";
import cls from './navbar.module.scss';
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/app-link.component";
import { ThemeSwitcher } from "shared/ui/theme-switcher";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar }
