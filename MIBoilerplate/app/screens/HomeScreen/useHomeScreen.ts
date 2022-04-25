import {useState, useEffect} from 'react';
import {API, TodosRes} from 'app-services';

export const useHomeScreen = () => {
  const [todoData, setTodoData] = useState<TodosRes[] | []>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const getAllTodosRes = await API.getAllTodos();
      console.log('getAllTodosRes >>> ', getAllTodosRes);
      setTodoData(getAllTodosRes);
    } catch (error) {
      console.log('E2 >>> ', error);

      return Promise.reject(error);
    }
  };

  return {
    todoData,
  };
};
