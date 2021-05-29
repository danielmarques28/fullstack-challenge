import React from 'react';
import { Text, View } from 'react-native';
import { Container } from 'src/components';
import * as S from './Home.styles';

export const Home = () => {
  return (
    <Container>
      <S.HomeView>
        <Text>Home</Text>
      </S.HomeView>
    </Container>
  );
};
