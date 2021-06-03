import styled from 'styled-components/native';

export const BottomBarView = styled.View`
  ${({ theme }) => `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${theme.spacings.xxxmedium};
    background: ${theme.colors.white};
  `}
`;

export const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
