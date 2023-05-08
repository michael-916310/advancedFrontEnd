import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from "./pages/about-page/about-page.async";
import { MainPageAsync } from "./pages/main-page/main-page.async";
import { Suspense } from "react";
import { useTheme } from "./theme/use-theme";


const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export { App };