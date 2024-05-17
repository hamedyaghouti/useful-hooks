import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    const parsedValue: T = storedValue ? JSON.parse(storedValue) : defaultValue;
    return parsedValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}