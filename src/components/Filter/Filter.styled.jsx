import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1051px) {
    flex-direction: column;
    align-items: center;
  }
  max-width: 1600px;

  gap: 18px;
  align-items: flex-end;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const SelectWrapper = styled.div`
  @media screen and (max-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const MileageInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
`;

export const InputsWrapper = styled.div``;

export const MileageInputLeft = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const MileageInputRight = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 115px 14px 24px;
  border-radius: 0px 14px 14px 0px;
  border: none;
  border-left: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;

  font-weight: 500;
  line-height: 1.11;

  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 9px;
`;

export const FilterButton = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;
