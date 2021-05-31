import React, { useEffect } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Text, Box } from 'src/components';
import { useTheme } from 'styled-components';
import * as S from './BookItem.styles';

export type BookItemProps = {
  image: ImageSourcePropType;
  title: string;
  author: string;
};

export const BookItem = ({ image, title, author }: BookItemProps) => {
  const theme = useTheme();

  return (
    <S.BookItemView>
      <S.Image source={image} />

      <Box height={theme.spacings.xxsmall} />

      <Text weight="bold" size="small" color="lightBack">
        {title}
      </Text>

      <Box height={theme.spacings.xxxsmall} />

      <Text weight="bold" size="xsmall" color="lightBack">
        by {author}
      </Text>
    </S.BookItemView>
  );
};
