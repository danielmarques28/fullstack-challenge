import React from 'react';
import { TouchableOpacity, ButtonProps as ButtonPropsRN } from 'react-native';
import { Text } from '../Text/Text';
import * as S from './Button.styles';

export type ButtonProps = {
  onPress?: ButtonPropsRN['onPress'];
  children?: string;
};

export const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.ButtonView>
        <Text variant="button">{children}</Text>
      </S.ButtonView>
    </TouchableOpacity>
  );
};
