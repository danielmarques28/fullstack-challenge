import axios from './axios';

export type CreateBook = {
  name: string;
  author: string;
  description: string;
};

export type ListBooks = {
  count: number;
  rows: GetBook[];
};

export type GetBook = {
  id: number;
  name: string;
  author: string;
  description: string;
  updatedAt?: string;
  createdAt?: string;
};

const url = '/books';

export const createBook = async (body: CreateBook) => {
  return axios.post<GetBook>(url, body);
};

export const listBooks = async (page: number = 1) => {
  return axios.get<ListBooks>(`${url}?page=${page}`);
};
