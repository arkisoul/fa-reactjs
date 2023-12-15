import { TodosService } from './TodosService'
import { RequestService } from './RequestService';
import { mockTodos } from '../mocks/todos.mock';

describe('TodosService', () => {
  it('fetchAllTodos should return todos list', async () => {
    RequestService.get = jest.fn().mockResolvedValue(mockTodos);
    const res = await TodosService.fetchAllTodos();
    expect(res).toEqual(mockTodos);
  })

  it('fetchTodoById should return todo by id', async () => {
    RequestService.get = jest.fn().mockResolvedValue(mockTodos[0]);
    const res = await TodosService.fetchTodoById(mockTodos[0].id);
    expect(res).toStrictEqual(mockTodos[0]);
    expect(res.id).toStrictEqual(mockTodos[0].id);
  })
})