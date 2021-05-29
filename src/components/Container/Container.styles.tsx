import styled from 'styled-components/native';

export const ContainerView = styled.View`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    background: ${theme.colors.background};
  `}
`;
