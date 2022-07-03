// 중괄호가 없는 곳은 export default가 되있다0. (이름 변경 가능, export default는 한 파일당 하나만 가능)
// {} 이게 있는 거는 export만 (이름 변경 불가능)

import useTextInput from './hooks/useTextInput';
import { instance } from './libs/api';

function Practice() {
  const { value: todo, onChange: onChangeTodo } = useTextInput({});
  const { value: writer, onChange: onChangeWriter } = useTextInput({ initialValue: '개발자들' });

  function onClickLogBtn() {
    console.log(todo);
    console.log(writer);
    instance.get('/todo');
  }
  // option shift F
  return (
    <div>
      <input value={todo} onChange={onChangeTodo} />
      <input value={writer} onChange={onChangeWriter} />
      <button onClick={onClickLogBtn}>출력</button>
    </div>
  );
}

export default Practice;
