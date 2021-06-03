import axios from './axios';

export type GetAuthor = {
  id: number;
  name: string;
};

export type ListAuthors = GetAuthor[];

const url = '/authors';

export const listAuthors = async () => {
  return axios.get<ListAuthors>(`${url}`);
};
