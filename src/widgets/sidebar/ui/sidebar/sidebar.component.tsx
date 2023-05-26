import { classNames } from 'shared/lib/class-names/class-names';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher.component';
import { Button } from 'shared/ui/button/button.component';
import { useTranslation } from 'react-i18next';
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((value) => !value);
  };

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={
        classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
      }
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {t('Переключить')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>

    </div>
  );
};

export { Sidebar };
