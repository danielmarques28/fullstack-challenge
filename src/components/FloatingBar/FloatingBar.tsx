import React from 'react';
import { Icon } from 'src/components';
import { useTheme } from 'styled-components';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import * as S from './FloatingBar.styles';

export const FloatingBar = () => {
  const theme = useTheme();

  return (
    <S.FloatingBarView>
      <S.TouchableOpacity onPress={() => {}}>
        <Icon name="book-open" color="gray" />
        <Box width={theme.spacings.xxsmall} />
        <Text>Read</Text>
      </S.TouchableOpacity>

      <S.BorderV />

      <S.TouchableOpacity onPress={() => {}}>
        <Icon name="headphones" color="gray" />
        <Box width={theme.spacings.xxsmall} />
        <Text>Listen</Text>
      </S.TouchableOpacity>

      <S.BorderV />

      <S.TouchableOpacity onPress={() => {}}>
        <Icon name="share" color="gray" />
        <Box width={theme.spacings.xxsmall} />
        <Text>Share</Text>
      </S.TouchableOpacity>
    </S.FloatingBarView>
  );
};
