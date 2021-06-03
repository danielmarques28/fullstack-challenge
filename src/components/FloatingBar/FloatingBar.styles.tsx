import styled from 'styled-components/native';

export const FloatingBarView = styled.View`
  ${({ theme }) => `
    position: absolute;
    padding: ${theme.spacings.small} ${theme.spacings.xxxsmall};
    bottom: ${theme.spacings.xxmedium};
    justify-content: space-between;
    align-self: center;
    flex-direction: row;
    background-color: white;
    border-radius: ${theme.spacings.xxsmall};
    shadow-color: #000;
    shadow-opacity: 0.8;
    elevation: 1;
  `}
`;

export const TouchableOpacity = styled.TouchableOpacity`
  ${({ theme }) => `
    flex-direction: row;
    padding: 0 ${theme.spacings.small};
  `}
`;

export const BorderV = styled.View`
  ${({ theme }) => `
    border-left-width: 1px;
    opacity: 0.25;
    border-left-color: ${theme.colors.gray};
  `}
`;
