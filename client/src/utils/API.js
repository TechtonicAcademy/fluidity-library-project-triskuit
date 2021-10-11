import axios from 'axios';

const endpoint = 'http://localhost:8080/api';

export const getBooks = (query) => {
  return query
    ? axios.get(`${endpoint}/books/search?query=${query}`)
    : axios.get(`${endpoint}/books/`);
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

export const editBook = (book) => {
  return axios.put(`${endpoint}/books/${book.id}`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
