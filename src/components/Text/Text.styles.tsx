import { Platform } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import { TextProps } from './Text';

const variantModifier = ({
  theme,
  variant = 'normal',
}: TextProps & { theme: DefaultTheme }) => {
  return {
    normal: `
      font-family: ${theme.font.family.primary + ' Regular'};
      font-size: ${theme.font.sizes.normal};
      font-weight: ${theme.font.weight.normal};
      color: ${theme.font.colors.primary};
    `,
    title: `
      font-family: ${theme.font.family.primary + ' Bold'};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.font.colors.secondary};
    `,
    button: `
      font-family: ${theme.font.family.primary + ' Bold'};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.font.colors.white};
    `,
  }[variant];
};

const fontWeightAndroidModifier = ({
  theme,
  weight,
}: TextProps & { theme: DefaultTheme }) => {
  if (!weight) return '';

  return {
    normal: `
      font-family: ${theme.font.family.primary + ' Regular'};
      font-weight: ${theme.font.weight.normal};
    `,
    semibold: `
      font-family: ${theme.font.family.primary + ' Bold'};
      font-weight: ${theme.font.weight.semibold};
    `,
    bold: `
      font-family: ${theme.font.family.primary + ' Bold'};
      font-weight: ${theme.font.weight.semibold};
    `,
  }[weight];
};

export const Text = styled.Text<TextProps>`
  ${(props) => `
    ${variantModifier(props)};
    ${Platform.OS === 'android' && fontWeightAndroidModifier(props)};
    ${props.color && `color: ${props.theme.font.colors[props.color]};`}
    ${props.size && `font-size: ${props.theme.font.sizes[props.size]};`}
  `}
`;
