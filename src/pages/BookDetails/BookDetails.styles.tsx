import styled from 'styled-components/native';

export const ImageBg = styled.View`
  position: absolute;
  width: 100%;
  height: 38%;
  background-color: #fff6e5;
  border-bottom-right-radius: 100px;
`;

export const DetailsView = styled.View`
  ${({ theme }) => `
    height: 100%;
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxmedium};
  `}
`;

export const BookImage = styled.View`
  ${({ theme }) => `
    justify-content: center;
    align-items: center;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xmedium};
  `}
`;
