import styled from 'styled-components/native';

export const ButtonView = styled.View<{ disable: boolean }>`
  ${({ theme, disable }) => `
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${theme.spacings.xxmedium};
    border-radius: ${theme.spacings.xxsmall};
    background-color: ${!disable ? theme.colors.primary : theme.colors.gray};
  `}
`;
