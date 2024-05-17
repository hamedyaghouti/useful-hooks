import { useLocalStorage } from "../hooks";

export const LocalStorageHookExample = () => {
  const [name, setName] = useLocalStorage<string>("name", "John Doe");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
};
