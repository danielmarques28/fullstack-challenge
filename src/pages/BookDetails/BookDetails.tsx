import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import { Box, Container, FloatingBar, Icon, Text } from 'src/components';
import { HomeStackParamList } from 'src/navigation/stacks';
import { useTheme } from 'styled-components';
import * as S from './BookDetails.styles';

type DetailsNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'BookDetails'
>;

export const BookDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation<DetailsNavigationProp>();

  return (
    <Container>
      <S.ImageBg />

      <S.DetailsView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" />
        </TouchableOpacity>

        <S.BookImage>
          <Image source={require('src/assets/images/png/book.png')} />
        </S.BookImage>

        <Text weight="normal" color="primary" variant="title">
          Bla Bla Bla Bla Bla Bla Bla{' '}
        </Text>

        <Box height={theme.spacings.xxxsmall} />

        <Text color="secondary" variant="normal">
          Author
        </Text>

        <Box height={theme.spacings.xxsmall} />

        <Text color="lightBack">asdfasdfasfdasdf</Text>

        <FloatingBar />
      </S.DetailsView>
    </Container>
  );
};
