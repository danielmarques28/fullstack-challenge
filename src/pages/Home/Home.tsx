import React from 'react';
import { FlatList } from 'react-native';
import { BookItem, Box, Container, Text } from 'src/components';
import { useTheme } from 'styled-components';
import * as S from './Home.styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'src/navigation/stacks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

export const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <Container scrollView={false}>
      <S.HomeView>
        <Text color="primary" variant="title">
          Hi, <Text variant="title">Mehmed Al Fatih</Text>
        </Text>

        <Box height={theme.spacings.medium} />

        <FlatList
          data={Array(4).fill({
            id: 1,
            image: 'src/assets/images/png/book.png',
            title: 'The One Thing',
            author: 'Gary Keller',
          })}
          renderItem={({ item }) => (
            <S.ItemView>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { id: item.id })}
              >
                <BookItem
                  image={require('src/assets/images/png/book.png')}
                  title={item.title}
                  author={item.author}
                />
              </TouchableOpacity>
            </S.ItemView>
          )}
          numColumns={3}
          keyExtractor={(index) => index}
          refreshing={false}
          onRefresh={() => {}}
        />
      </S.HomeView>
    </Container>
  );
};
