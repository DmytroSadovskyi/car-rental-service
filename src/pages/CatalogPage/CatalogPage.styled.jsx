import { styled } from 'styled-components';

export const CarsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  width: 79px;
  height: 24px;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 40px;
  color: #3470ff;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const SortButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 48px;
  height: 48px;
  padding: 10px;
  border: none;
  background-color: transparent;

  svg {
    fill: #3470ff;
  }
`;
