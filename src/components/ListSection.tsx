import { useEffect, useState } from 'react';
import { instance } from '../libs/api';

interface FieldsInterface {
  name: string;
}

interface IList {
  id: string;
  createdTime: string;
  fields: FieldsInterface;
}

function ListSection() {
  const [data, setData] = useState<IList[]>([]);

  useEffect(() => {
    async function getList() {
      const result = await instance.get('/todo');
      setData(result.data.records);
    }
    getList();
  }, []);

  return (
    <section>
      {data.map(record => (
        <span key={record.id}>{record.fields.name}</span>
      ))}
    </section>
  );
}

export default ListSection;
