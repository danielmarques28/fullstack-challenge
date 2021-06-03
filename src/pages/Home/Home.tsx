import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { BookItem, Box, Container, Text, TextInput } from 'src/components';
import { useTheme } from 'styled-components';
import * as S from './Home.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'src/navigation/stacks';
import { useNavigation } from '@react-navigation/native';
import { ListBooks, listBooks } from 'src/api/book';
import { isFloat, isInt } from 'src/utils/calcule';
import useKeyboard from 'src/hooks/useKeyboard';

export type HomeNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const LIMIT_PER_PAGE = 9;

export const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation<HomeNavigationProp>();
  const { keyboardIsOpen } = useKeyboard();

  const [books, setBooks] = useState<ListBooks[0]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    handleListBooks(null);
  }, []);

  const handleListBooks = useCallback(async (search: string | null) => {
    try {
      setRefreshing(true);

      const { data } = await listBooks(1, LIMIT_PER_PAGE, search);

      setBooks(data[0]);
      setCount(data[1]);

      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.log('error', error);
    }
  }, []);

  const loadMoreBooks = async (newPage: number) => {
    try {
      setIsLoading(true);
      setPage(newPage);

      const { data } = await listBooks(newPage, LIMIT_PER_PAGE);

      setBooks([...books, ...data[0]]);
      setCount(data[1]);

      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.log('error', error);
    }
  };

  const onChangeSearch = async (text: string) => {
    setPage(1);
    handleListBooks(text);
  };

  return (
    <Container scrollView={false}>
      <S.HomeView>
        <S.SearchView>
          <TextInput
            icon="search"
            placeholder="Search book"
            onChangeText={onChangeSearch}
          />
        </S.SearchView>

        {!keyboardIsOpen && (
          <Box>
            <Text color="primary" variant="title">
              Hi, <Text variant="title">Mehmed Al Fatih</Text> 👋
            </Text>

            <Box height={theme.spacings.medium} />
          </Box>
        )}

        <FlatList
          data={books}
          renderItem={({ item }) => (
            <S.ItemView>
              <BookItem
                image={require('src/assets/images/png/book.png')}
                id={item.id}
                name={item.name}
                author={item.author}
                navigation={navigation}
              />
            </S.ItemView>
          )}
          numColumns={3}
          keyExtractor={(item) => String(item.id)}
          refreshing={refreshing}
          onRefresh={() => {
            setPage(1);
            handleListBooks(null);
          }}
          onEndReached={() => {
            const total = count / LIMIT_PER_PAGE;

            if (
              (isInt(total) && page >= total) ||
              (isFloat(total) && page >= ~~total + 1)
            ) {
              setIsLoading(false);
              return;
            }

            loadMoreBooks(page + 1);
          }}
          onEndReachedThreshold={0}
          ListFooterComponent={() => (
            <>
              {isLoading && (
                <S.LoadingView>
                  <ActivityIndicator size="large" color={theme.colors.black} />
                </S.LoadingView>
              )}
            </>
          )}
        />
      </S.HomeView>
    </Container>
  );
};
