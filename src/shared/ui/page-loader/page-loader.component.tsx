import { classNames } from 'shared/lib/class-names/class-names';
import { FC } from 'react';
import { Loader } from 'shared/ui/loader/loader.component';
import cls from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);

export { PageLoader };
