import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
}

function useTextInput({ initialValue = '' }: Props) {
  // default 값
  const [value, setValue] = useState<string>(initialValue);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function clearValue() {
    setValue('');
  }

  return { value, onChange, clearValue };
}

export default useTextInput;
