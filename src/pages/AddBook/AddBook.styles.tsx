import styled from 'styled-components/native';

export const AddBookView = styled.View`
  ${({ theme }) => `
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxmedium};
  `}
`;
