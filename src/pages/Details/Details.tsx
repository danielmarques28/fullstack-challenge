import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Icon } from 'src/components';
import { HomeStackParamList } from 'src/navigation/stacks';
import * as S from './Details.styles';

type DetailsNavigationProp = StackNavigationProp<HomeStackParamList, 'Details'>;

export const Details = () => {
  const navigation = useNavigation<DetailsNavigationProp>();

  return (
    <Container>
      <S.DetailsView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" />
        </TouchableOpacity>
      </S.DetailsView>
    </Container>
  );
};
