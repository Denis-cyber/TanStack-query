import { useTodos } from "./hooks/useTodos";

function App() {
  const { isLoading, data } = useTodos();

  return (
    <>
      {isLoading && <div>Loading...</div>}

      {data?.length ? (
        data.map((todo) => (
          <div key={todo.id}>
            <b>{todo.id}</b>
            {todo.title}
          </div>
        ))
      ) : (
        <h1>Data not found</h1>
      )}
    </>
  );
}

export { App };
