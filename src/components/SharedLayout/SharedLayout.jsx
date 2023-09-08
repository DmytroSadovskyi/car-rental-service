import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Header } from './SharedLayout.styled';

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
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
