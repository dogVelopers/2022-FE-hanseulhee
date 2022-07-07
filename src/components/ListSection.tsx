import { useEffect, useState } from 'react';
import { instance } from '../libs/api';

function ListSection() {
  const [data, setData] = useState<any>({ records: [] });

  useEffect(() => {
    async function getList() {
      const result = await instance.get('/todo');
      setData(result.data);
    }
    getList();
  }, []);

  return (
    <section>
      {data.records.map(record => (
        <span key={record.id}>{record.fields.name}</span>
      ))}
    </section>
  );
}

export default ListSection;
