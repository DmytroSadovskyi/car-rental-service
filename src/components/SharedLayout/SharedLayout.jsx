import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Header } from './SharedLayout.styled';
import FallBackLoader from '../FallBackLoader/FallBackLoader';
import Translator from 'components/LangToggler/LangToggler';
import { useTranslation } from 'react-i18next';

const SharedLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>
            {t('home')}
          </StyledLink>
          <StyledLink to="/catalog">{t('catalog')}</StyledLink>
          <StyledLink to="/favorites">{t('favorites')}</StyledLink>
        </nav>
        <Translator />
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
