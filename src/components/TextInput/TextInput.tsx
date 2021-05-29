import React from 'react';
import { TextInputProps as TextInputPropsRN } from 'react-native';
import { Text } from '../Text/Text';
import * as S from './TextInput.styles';

export type TextInputProps = {
  onChangeText?: TextInputPropsRN['onChangeText'];
  multiline?: TextInputPropsRN['multiline'];
  numberOfLines?: TextInputPropsRN['numberOfLines'];
  label?: string;
} & Pick<TextInputPropsRN, 'onChangeText' | 'multiline' | 'numberOfLines'>;

export const TextInput = ({
  onChangeText,
  multiline,
  numberOfLines,
  label,
}: TextInputProps) => {
  return (
    <S.TextInputView>
      {label && <Text weight="bold">{label}</Text>}

      <S.TextInput
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </S.TextInputView>
  );
};
