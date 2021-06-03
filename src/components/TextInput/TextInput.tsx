import React from 'react';
import { TextInputProps as TextInputPropsRN } from 'react-native';
import { useTheme } from 'styled-components';
import { Icon, IconProps } from '../Icon/Icon';
import { Text } from '../Text/Text';
import * as S from './TextInput.styles';

export type TextInputProps = {
  onChangeText?: TextInputPropsRN['onChangeText'];
  multiline?: TextInputPropsRN['multiline'];
  numberOfLines?: TextInputPropsRN['numberOfLines'];
  placeholder?: TextInputPropsRN['placeholder'];
  label?: string;
  icon?: IconProps['name'];
};

export const TextInput = ({
  onChangeText,
  multiline,
  numberOfLines,
  placeholder,
  label,
  icon,
}: TextInputProps) => {
  const theme = useTheme();

  return (
    <S.TextInputView>
      {label && <Text weight="bold">{label}</Text>}

      <S.Input>
        {icon && (
          <S.Icon>
            <Icon name={icon} color="gray" />
          </S.Icon>
        )}

        <S.TextInput
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          placeholderTextColor={theme.font.colors.gray}
          icon={icon}
        />
      </S.Input>
    </S.TextInputView>
  );
};
