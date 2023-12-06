import { RequestService } from './RequestService';

const baseUrl = `todos`;

export const TodosService = {
  fetchAllTodos: () => {
    return RequestService.get(baseUrl)
  },
  fetchTodoById: (id) => RequestService.get(`${baseUrl}/${id}`),
  createATodo: (todo) => {
    return RequestService.post(baseUrl, todo)
  },
  deleteATodoById: (id) => {
    return RequestService.delete(`${baseUrl}/${id}`)
  },
  updateATodoById: (id, todo) => {
    return RequestService.put(`${baseUrl}/${id}`, todo)
  }
}