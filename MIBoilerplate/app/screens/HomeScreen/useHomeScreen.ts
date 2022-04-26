import {useState, useEffect} from 'react';
import {API, TodosRes} from 'app-services';
import {getRandomColor} from 'app-constants';

export const useHomeScreen = () => {
  const [todoData, setTodoData] = useState<TodosRes[] | []>([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    try {
      const getAllTodosRes = await API.getAllTodos();
      if (getAllTodosRes) {
        getAllTodosRes.forEach(val => {
          val.backgroundColor = getRandomColor();
        });
        setTodoData(getAllTodosRes);
      }
    } catch (error) {
      console.log('getAllTodos Err >>> ', error);

      return Promise.reject(error);
    }
  };

  return {
    todoData,
  };
};
