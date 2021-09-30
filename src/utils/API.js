import axios from 'axios';

const endpoint = 'http://localhost:3000';

export const getBooks = () => {
  return axios.get(`${endpoint}/books`);
};

export const getBook = (id) => {
  return axios.get(`${endpoint}/books/${id}`);
};

export const addBook = (book) => {
  return axios.post(`${endpoint}/books`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteBook = (id) => {
  return axios.delete(`${endpoint}/books/${id}`);
};
