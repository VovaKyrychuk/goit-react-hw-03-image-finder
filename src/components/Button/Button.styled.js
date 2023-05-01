import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 4px;
  padding-right: 4px;
  padding-left: 4px;
  padding-top: 3px;
  padding-bottom: 3px;
  border: none;
  border-radius: 8px;
  font-size: 16 px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.gray};
  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;
