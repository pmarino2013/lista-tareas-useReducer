import { useState } from "react";

const TareaApp = ({ item, handleDelete, handleUpdate }) => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState(item.tarea);

  const submit = (e) => {
    e.preventDefault();
    handleUpdate({ id: item.id, tarea: input.toUpperCase() });
    setActive(false);
  };

  return (
    <li className="d-flex justify-content-between align-items-center mb-3 color-tarea">
      {active ? (
        <form onSubmit={submit}>
          <input
            type="text"
            value={input.toUpperCase()}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      ) : (
        <span onTouchEnd={() => setActive(!active)}>{input.toUpperCase()}</span>
      )}

      <button
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(item.id)}
      >
        x
      </button>
    </li>
  );
};

export default TareaApp;
