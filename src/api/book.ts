import { GetAuthor } from './author';
import axios from './axios';

export type CreateBook = {
  name: string;
  author: string;
  description: string;
};

export type ListBooks = [GetBook[], number];

export type GetBook = {
  id: number;
  name: string;
  author: GetAuthor;
  description: string;
};

const url = '/books';

export const createBook = async (body: CreateBook) => {
  return axios.post<GetBook>(url, body);
};

export const listBooks = async (
  page: number = 1,
  limit: number = 9,
  search: string | null = null,
) => {
  return axios.get<ListBooks>(
    `${url}?page=${page}&limit=${limit}` + (search ? `&search=${search}` : ''),
  );
};

export const getBook = async (id: number) => {
  return axios.get<GetBook>(`${url}/${id}`);
};
