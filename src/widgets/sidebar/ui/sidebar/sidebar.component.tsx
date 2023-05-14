import { classNames } from "shared/lib/class-names/class-names";
import cls from './sidebar.module.scss';
import { FC, useState } from "react";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/lang-switcher/lang-switcher.component";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((value) => !value)
  }

  console.log('cls.collapsed', cls.collapsed, typeof cls.collapsed);
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>

    </div>
  );
};

export { Sidebar }