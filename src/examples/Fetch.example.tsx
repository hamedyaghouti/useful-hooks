import { useFetch } from "../hooks";

interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const FetchHookExample = () => {
  const { data, error, loading } = useFetch<ITodoItem[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) {
    return <p>Loading data...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
