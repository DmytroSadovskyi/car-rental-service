import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Header } from './SharedLayout.styled';
import FallBackLoader from '../FallBackLoader/FallBackLoader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<FallBackLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
