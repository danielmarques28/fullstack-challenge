import styled from 'styled-components/native';

export const HomeView = styled.View`
  ${({ theme }) => `
    height: 100%;
    padding: ${theme.spacings.small};
    padding-bottom: 0;
  `}
`;

export const SearchView = styled.View`
  ${({ theme }) => `
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.medium};
  `}
`;

export const ItemView = styled.View`
  ${({ theme }) => `
    flex: 1;
    flex-direction: column;
    padding-bottom: ${theme.spacings.small};
  `}
`;

export const LoadingView = styled.View`
  ${({ theme }) => `
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    align-items: center;
  `}
`;
