import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px 8px;
  margin-bottom: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 15px;
  margin: 0 auto;

  /* @media screen and (min-width: 480px) {
    max-width: 448px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  } */
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: white;
    background-color: #3470ff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;