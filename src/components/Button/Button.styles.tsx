import styled from 'styled-components/native';

export const ButtonView = styled.View`
  ${({ theme }) => `
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${theme.spacings.xxmedium};
    border-radius: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.primary};
  `}
`;
