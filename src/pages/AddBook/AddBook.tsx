import React, { useState } from 'react';
import { createBook } from 'src/api/book';
import { Box, Container, Text, TextInput } from 'src/components';
import { Button } from 'src/components/Button/Button';
import { useTheme } from 'styled-components';
import * as S from './AddBook.styles';

export const AddBook = () => {
  const theme = useTheme();
  const [name, setName] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const res = await createBook({ name, author, description });
      console.log('res', res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container>
      <S.AddBookView>
        <Text variant="title">Add a new book</Text>

        <Box height={theme.spacings.xxmedium} />

        <TextInput label="Name" onChangeText={(text) => setName(text)} />

        <Box height={theme.spacings.medium} />

        <TextInput label="Author" onChangeText={(text) => setAuthor(text)} />

        <Box height={theme.spacings.medium} />

        <TextInput
          label="Description"
          onChangeText={(text) => setDescription(text)}
          multiline
          numberOfLines={8}
        />

        <Box height={theme.spacings.medium} />

        <Button onPress={handleSubmit}>Add new book</Button>
      </S.AddBookView>
    </Container>
  );
};
