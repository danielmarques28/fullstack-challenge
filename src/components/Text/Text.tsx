import React from 'react';
import { DefaultTheme } from 'styled-components';
import * as S from './Text.styles';

export type TextProps = {
  children: React.ReactNode;
  variant?: 'normal' | 'subtitle' | 'title' | 'button';
  color?: keyof DefaultTheme['font']['colors'];
  size?: keyof DefaultTheme['font']['sizes'];
  weight?: keyof DefaultTheme['font']['weight'];
};

export const Text = ({
  children,
  variant = 'normal',
  color,
  size,
  weight,
}: TextProps) => {
  return (
    <S.Text color={color} variant={variant} size={size} weight={weight}>
      {children}
    </S.Text>
  );
};
