import styled from 'styled-components/native';

export const HomeView = styled.View`
  ${({ theme }) => `
    padding: ${theme.spacings.small};
  `}
`;

export const ItemView = styled.View`
  ${({ theme }) => `
    flex: 1;
    flex-direction: column;
    padding-bottom: ${theme.spacings.small};
  `}
`;
