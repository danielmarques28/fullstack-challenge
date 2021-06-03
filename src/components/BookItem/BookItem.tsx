import React from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { GetAuthor } from 'src/api/book';
import { Text, Box } from 'src/components';
import { HomeNavigationProp } from 'src/pages';
import { useTheme } from 'styled-components';
import * as S from './BookItem.styles';

export type BookItemProps = {
  id: number;
  image: ImageSourcePropType;
  name: string;
  author: GetAuthor;
  navigation: HomeNavigationProp;
};

export const BookItem = ({
  id,
  image,
  name,
  author,
  navigation,
}: BookItemProps) => {
  const theme = useTheme();

  return (
    <S.BookItemView>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookDetails', { id })}
      >
        <S.Image source={image} />

        <Box height={theme.spacings.xxsmall} />

        <Text weight="bold" size="small" color="lightBack">
          {name}
        </Text>

        <Box height={theme.spacings.xxxsmall} />

        <Text weight="bold" size="xsmall" color="lightBack">
          by {author.name}
        </Text>
      </TouchableOpacity>
    </S.BookItemView>
  );
};
