import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { AboutPageAsync } from "./pages/about-page/about-page.async";
import { MainPageAsync } from "./pages/main-page/main-page.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
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