import styled from 'styled-components/native';
import { TextInputProps } from './TextInput';

export const TextInputView = styled.View`
  width: 100%;
`;

export const Input = styled.View`
  ${({ theme }) => `
    position: relative;
    z-index: ${theme.layers.base};
  `}
`;

export const Icon = styled.View`
  ${({ theme }) => `
    position: absolute;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.overlay};
    width: 40px;
    height: 100%;
  `}
`;

export const TextInput = styled.TextInput<{
  label: TextInputProps['label'];
  icon: TextInputProps['icon'];
}>`
  ${({ theme, icon, label }) => `
    width: 100%;
    padding-left: ${icon ? theme.spacings.xmedium : theme.spacings.xsmall};
    margin-top: ${label ? theme.spacings.xxsmall : 0};
    background-color: ${theme.colors.white};
    border-radius: ${theme.spacings.xxsmall};
  `}
`;
