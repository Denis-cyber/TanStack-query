import { SyntheticEvent, useState } from "react";
import { useIsFetching, useMutation } from "@tanstack/react-query";
import { useTodos } from "./hooks/useTodos";
import todoService from "./services/todo.service";

function App() {
  const { data } = useTodos();
  const [title, setTitle] = useState("");
  const countFetching = useIsFetching();

  const { mutate } = useMutation(
    ["create todo"],
    (titleParam: string) => todoService.create(titleParam),
    {
      onSuccess() {
        setTitle("");
        alert("Todo created!");
      },
    }
  );

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(title);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      <div>
        {!!countFetching && <h3>Loading... </h3>}
        <h2>Create todo:</h2>

        <form>
          <div>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter todo title'
            />
          </div>

          <br />

          <button type='submit' onClick={submitHandler}>
            Create
          </button>
        </form>
      </div>
      <div>
        <h1>TODOS: </h1>

        {data?.length ? (
          data.map((todo) => (
            <div key={todo.id}>
              <b>{todo.id}</b>.{todo.title}
            </div>
          ))
        ) : (
          <h1>Data not found</h1>
        )}
      </div>
    </div>
  );
}

export { App };
