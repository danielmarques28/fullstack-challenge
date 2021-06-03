import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { ListAuthors, listAuthors } from 'src/api/author';
import { createBook } from 'src/api/book';
import { Box, Container, Text, TextInput } from 'src/components';
import { Button } from 'src/components/Button/Button';
import { useTheme } from 'styled-components';
import * as S from './AddBook.styles';

export const AddBook = () => {
  const theme = useTheme();
  const [name, setName] = useState<string>('');
  const [authors, setAuthors] = useState<ListAuthors>([]);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleListAuthors = async () => {
      const { data } = await listAuthors();
      setAuthors(data);
    };

    handleListAuthors();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const author = selectedAuthorId;
      const { data } = await createBook({ name, author, description });
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <S.AddBookView>
        <Text variant="title">Add a new book</Text>

        <Box height={theme.spacings.xxmedium} />

        <TextInput label="Name" onChangeText={(text) => setName(text)} />

        <Box height={theme.spacings.medium} />

        <Text weight="bold">Authors</Text>

        <Box height={theme.spacings.xxsmall} />

        <S.PickerView>
          <Picker
            mode="dialog"
            selectedValue={selectedAuthorId}
            onValueChange={(value) => setSelectedAuthorId(value)}
            dropdownIconColor="black"
            prompt="Authors"
            style={{
              color: 'black',
              borderRadius: 10,
            }}
          >
            {authors.map((author) => (
              <Picker.Item
                label={author.name}
                value={author.id}
                key={author.id}
              />
            ))}
          </Picker>
        </S.PickerView>

        <Box height={theme.spacings.medium} />

        <TextInput
          label="Description"
          onChangeText={(text) => setDescription(text)}
          multiline
          numberOfLines={8}
        />

        <Box height={theme.spacings.medium} />

        <Button
          disable={name.length < 3 || description.length === 0}
          loading={isLoading}
          onPress={handleSubmit}
        >
          Add new book
        </Button>
      </S.AddBookView>
    </Container>
  );
};
