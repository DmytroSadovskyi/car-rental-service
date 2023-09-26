import Select from 'react-select';
import { useState } from 'react';
import {
  FilterContainer,
  SelectWrapper,
  MileageInputsWrapper,
  MileageInputLeft,
  MileageInputRight,
  Label,
  InputsWrapper,
  ButtonsWrapper,
  FilterButton,
} from './Filter.styled';

import { useTranslation } from 'react-i18next';

const Filter = ({
  makeFilter,
  priceFilter,
  mileageFilter,
  setMakeFilter,
  setPriceFilter,
  setMileageFilter,
  handleReset,
  makes,
  onApplyFilters,
  children,
}) => {
  const { t } = useTranslation();

  const [makeMenuIsOpen, setMakeMenuIsOpen] = useState(false);
  const [priceMenuIsOpen, setPriceMenuIsOpen] = useState(false);

  const handleMakeChange = selectedOption => {
    setMakeFilter(selectedOption ? selectedOption.value : '');
  };

  const handlePriceChange = selectedOption => {
    setPriceFilter(selectedOption ? selectedOption.value : '');
  };

  const handleMakeKeyDown = event => {
    if (event.key === 'Enter') {
      setMakeMenuIsOpen(!makeMenuIsOpen);
    }
  };

  const handlePriceKeyDown = event => {
    if (event.key === 'Enter') {
      setPriceMenuIsOpen(!priceMenuIsOpen);
    }
  };

  const customStyles = {
    control: provided => ({
      ...provided,
      width: '224px',
      height: '48px',
      border: 'none',
      padding: '0px 14px',
      borderRadius: '14px',
      background: '#F7F7FB',
    }),
    input: provided => ({
      ...provided,
      border: 'none',
    }),
    menuList: provided => ({
      ...provided,
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(18, 20, 23, 0.05)',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
      '&::-webkit-scrollbar-track': {
        background: '#fff',
      },
    }),
    indicatorSeparator: () => null,
    menu: provided => ({
      ...provided,
      width: '200px',
      padding: '14px 8px 14px 18px',
      borderRadius: '14px',
      border: '1px solid rgba(18, 20, 23, 0.05)',
      background: '#FFF',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      color: 'rgba(18, 20, 23, 0.20)',
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: ' 500',
      lineHeight: '1.25',
    }),
    placeholder: provided => ({
      ...provided,
      color: ' #121417',
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '1.11',
    }),
    indicatorsContainer: provided => ({
      ...provided,
      transform: makeMenuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      '& svg': {
        width: '20px',
        height: '20px',
        color: 'rgba(18, 20, 23, 1)',
      },
    }),
  };

  const priceSelectStyles = {
    ...customStyles,
    control: provided => ({
      ...provided,
      width: '125px',
      height: '48px',
      border: 'none',
      padding: '0px 14px',
      borderRadius: '14px',
      background: '#F7F7FB',
    }),
    indicatorsContainer: provided => ({
      ...provided,
      transform: priceMenuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      '& svg': {
        width: '20px',
        height: '20px',
        color: 'rgba(18, 20, 23, 1)',
      },
    }),
  };

  const priceOptions = [];
  for (let price = 30; price <= 500; price += 10) {
    priceOptions.push({ label: price, value: price });
  }

  const makeOptions = [...makes].sort().map(make => ({
    label: make,
    value: make,
  }));
  return (
    <FilterContainer>
      <SelectWrapper>
        <MileageInputsWrapper>
          <Label htmlFor="brand">{t('brandInput')}</Label>
          <Select
            inputId="brand"
            options={makeOptions}
            value={makeFilter ? { label: makeFilter, value: makeFilter } : null}
            onChange={handleMakeChange}
            styles={customStyles}
            menuIsOpen={makeMenuIsOpen}
            onMenuOpen={() => setMakeMenuIsOpen(true)}
            onMenuClose={() => setMakeMenuIsOpen(false)}
            placeholder={t('brandPlaceholder')}
            onKeyDown={handleMakeKeyDown}
          />
        </MileageInputsWrapper>
        <MileageInputsWrapper>
          <Label htmlFor="price">{t('priceInput')}</Label>
          <Select
            inputId="price"
            options={priceOptions}
            value={
              priceFilter ? { label: priceFilter, value: priceFilter } : null
            }
            onChange={handlePriceChange}
            styles={priceSelectStyles}
            menuIsOpen={priceMenuIsOpen}
            onMenuOpen={() => setPriceMenuIsOpen(true)}
            onMenuClose={() => setPriceMenuIsOpen(false)}
            placeholder={t('pricePlaceholder')}
            onKeyDown={handlePriceKeyDown}
          />
        </MileageInputsWrapper>
      </SelectWrapper>
      <MileageInputsWrapper>
        <Label htmlFor="mileage">{t('mileageInput')}</Label>
        <InputsWrapper>
          <MileageInputLeft
            id="mileage"
            type="text"
            value={mileageFilter.min}
            onChange={e =>
              setMileageFilter({
                ...mileageFilter,
                min: e.target.value,
              })
            }
            placeholder={t('leftPlaceholder')}
          />
          <MileageInputRight
            type="text"
            value={mileageFilter.max}
            onChange={e =>
              setMileageFilter({
                ...mileageFilter,
                max: e.target.value,
              })
            }
            placeholder={t('rightPlaceholder')}
          />
        </InputsWrapper>
      </MileageInputsWrapper>

      <ButtonsWrapper>
        <FilterButton
          type="button"
          onClick={() => {
            onApplyFilters();
          }}
        >
          {t('search')}
        </FilterButton>
        <FilterButton type="button" onClick={handleReset}>
          {t('reset')}
        </FilterButton>
      </ButtonsWrapper>
      {children}
    </FilterContainer>
  );
};

export default Filter;
