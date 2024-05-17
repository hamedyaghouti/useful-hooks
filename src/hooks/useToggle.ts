import { useState } from "react";

export function useToggle(initialValue: boolean | undefined = false) {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };
  return [value, toggle] as [boolean, () => void];
}
