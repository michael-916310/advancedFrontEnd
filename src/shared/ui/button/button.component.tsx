import { classNames } from 'shared/lib/class-names/class-names';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './button.module.scss';

enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton,
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;
  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};

export { Button, ThemeButton };
