import { TodosService } from './TodosService'
import { RequestService } from './RequestService';

const todos = [{
  "title": "Learn Reactjs",
  "isCompleted": true,
  "createdAt": "2023-12-06T06:44:28.768Z",
  "id": 1
},
{
  "title": "Learn Nodejs",
  "isCompleted": true,
  "createdAt": "2023-12-06T06:44:31.987Z",
  "id": 2
}];

describe('TodosService', () => {
  it('fetchAllTodos should return todos list', async () => {
    RequestService.get = jest.fn().mockResolvedValue(todos);
    const res = await TodosService.fetchAllTodos();
    expect(res).toEqual(todos);
  })

  it('fetchTodoById should return todo by id', async () => {
    RequestService.get = jest.fn().mockResolvedValue(todos[0]);
    const res = await TodosService.fetchTodoById(todos[0].id);
    expect(res).toStrictEqual(todos[0]);
    expect(res.id).toStrictEqual(todos[0].id);
  })
})