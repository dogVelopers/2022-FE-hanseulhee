import { useEffect, useState } from 'react';
import { instance } from '../libs/api';

interface IFields {
  name: string;
}

interface ITodoList {
  id: string;
  createdTime: string;
  fields: IFields;
}

function ListSection() {
  const [todo, setTodo] = useState<ITodoList[]>([]);

  useEffect(() => {
    async function getList() {
      const result = await instance.get('/todo');
      setTodo(result.data.records);
    }
    getList();
  }, []);

  return (
    <section>
      {todo.map(record => (
        <span key={record.id}>{record.fields.name}</span>
      ))}
    </section>
  );
}

export default ListSection;
