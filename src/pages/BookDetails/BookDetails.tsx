import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import {
  Box,
  Container,
  FloatingBar,
  Icon,
  Text,
  LoadingOverlay,
} from 'src/components';
import { HomeStackParamList } from 'src/navigation/stacks';
import { useTheme } from 'styled-components';
import * as S from './BookDetails.styles';
import { getBook, GetBook } from 'src/api/book';
import { RouteProp } from '@react-navigation/native';

type BookDetailsNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'BookDetails'
>;

type BookDetailsRouteProp = RouteProp<HomeStackParamList, 'BookDetails'>;

export const BookDetails = () => {
  const theme = useTheme();
  const route = useRoute<BookDetailsRouteProp>();
  const navigation = useNavigation<BookDetailsNavigationProp>();

  const [book, setBook] = useState<GetBook | null>(null);

  useEffect(() => {
    const handleGetBook = async () => {
      try {
        const { data } = await getBook(route.params.id);

        setBook(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    handleGetBook();
  }, []);

  if (!book) return <LoadingOverlay />;

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
          {book.name}
        </Text>

        <Box height={theme.spacings.xxxsmall} />

        <Text color="secondary" variant="normal">
          {book.author}
        </Text>

        <Box height={theme.spacings.xxsmall} />

        <Text color="lightBack">{book.description}</Text>

        <FloatingBar />
      </S.DetailsView>
    </Container>
  );
};
