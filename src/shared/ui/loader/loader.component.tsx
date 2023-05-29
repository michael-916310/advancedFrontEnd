import { classNames } from 'shared/lib/class-names/class-names';
import { FC } from 'react';
import './loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export { Loader };
