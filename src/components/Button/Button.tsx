import React from 'react';
import {
  TouchableOpacity,
  ButtonProps as ButtonPropsRN,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from 'styled-components';
import { Text } from '../Text/Text';
import * as S from './Button.styles';

export type ButtonProps = {
  onPress: ButtonPropsRN['onPress'];
  loading?: boolean;
  disable?: boolean;
  children?: string;
};

export const Button = ({
  onPress,
  children,
  loading = false,
  disable = false,
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress} disabled={disable || loading}>
      <S.ButtonView disable={disable}>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.white} />
        ) : (
          <Text variant="button">{children}</Text>
        )}
      </S.ButtonView>
    </TouchableOpacity>
  );
};
