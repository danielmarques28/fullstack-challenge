import React, { useState } from 'react';
import { Box, Container, Text, TextInput } from 'src/components';
import { Button } from 'src/components/Button/Button';
import { useTheme } from 'styled-components';
import * as S from './AddBook.styles';

export const AddBook = () => {
  const theme = useTheme();
  const [_, setName] = useState<string>('');

  const onChangeText = (text: string) => {
    setName(text);
  };

  return (
    <Container>
      <S.AddBookView>
        <Text variant="title">Add a new book</Text>

        <Box height={theme.spacings.xxmedium} />

        <TextInput label="Name" onChangeText={onChangeText} />

        <Box height={theme.spacings.medium} />

        <TextInput label="Author" onChangeText={onChangeText} />

        <Box height={theme.spacings.medium} />

        <TextInput
          label="Description"
          onChangeText={onChangeText}
          multiline
          numberOfLines={6}
        />

        <Box height={theme.spacings.medium} />

        <Button onPress={() => {}}>Add new book</Button>
      </S.AddBookView>
    </Container>
  );
};
