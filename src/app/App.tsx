import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from "react";
import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "app/providers/theme-provider";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export { App };