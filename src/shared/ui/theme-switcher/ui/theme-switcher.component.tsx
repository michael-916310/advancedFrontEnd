import { classNames } from "shared/lib/class-names/class-names";
import cls from './theme-switcher.module.scss';
import { FC } from "react";
import { Theme, useTheme } from "app/providers/theme-provider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from "shared/ui/button/button.component";


interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  );
};

export { ThemeSwitcher }