import { classNames } from 'shared/lib/class-names/class-names';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './app-link.module.scss';

enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;
  return (
    <Link {...otherProps} to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};

export { AppLink, AppLinkTheme };
