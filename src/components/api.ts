import axios from 'axios';

// baseURL = корень API, к нему прибавляются пути
export const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

// GET(url, config)
// url = путь, config = объект (query через params). Возвращает res.data
export async function getTodos() {
  const response = await api.get('/todos');
  console.log(response);
  return response.data;
}

// POST(url, body, config)
// url = путь, body = данные (JSON). Возвращает созданный объект (res.data)
async function createTodo() {
  const res = await api.post('/todos', { title: 'Новая задача', completed: false });
  console.log(res.data);
  return res.data;
}

// DELETE(url, config)
// url = путь с id (например `/todos/1`). Возвращает статус res.status
export async function deleteTodo(id) {
  const res = await api.delete(`/todos/${id}`); // id подставляем прямо в URL
  console.log(res.status); // обычно 200 = ok
  return res.data;
}
