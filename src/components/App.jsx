import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('pages/HomePage/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage'));
const Favorites = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
