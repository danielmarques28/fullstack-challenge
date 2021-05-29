import styled from 'styled-components/native';

export const TextInputView = styled.View`
  width: 100%;
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => `
    width: 100%;
    margin-top: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    border-radius: ${theme.spacings.xxsmall};
  `}
`;
