import axios from './axios';

type Book = {
  name: string;
  description: string;
  author: string;
};

export const createBook = async (body: Book) => {
  const url = '/books';
  return axios.post(url, body);
};
