import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 1100;
  display: flex;
  border-radius: 10px;
  justify-content: center;

  align-items: center;
  min-height: 64px;
  padding: 8px 16px;
  color: #001b4c;
  background-color: #7facff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  backdrop-filter: blur(3.5px);
`;

export const SearchForm = styled.form`
  display: flex;

  align-items: center;
  width: 100%;
  max-width: 600px;
  box-shadow: rgb(53, 104, 89) 1px 1px 3px inset,
    rgb(255, 255, 255) -1px -1px 5px inset;
  border-radius: 3px;
  overflow: hidden;
`;

export const BtnText = styled.span`
  padding: 0 5px;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  background-image: url('/src/585e4ae1cb11b227491c3393.png');
  border-radius: 5px;
  border: 0px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
  background-color: transparent;
  color: #ffa500;
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
`;
