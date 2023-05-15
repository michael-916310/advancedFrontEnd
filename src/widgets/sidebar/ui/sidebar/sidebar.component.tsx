import { classNames } from 'shared/lib/class-names/class-names';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher.component';
import { Button } from 'shared/ui/button/button.component';
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((value) => !value);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>

    </div>
  );
};

export { Sidebar };
