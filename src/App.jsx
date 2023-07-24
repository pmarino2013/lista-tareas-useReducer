import taskReducer from "./reducer/taskReducer";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import TareaApp from "./components/TareaApp";

function App() {
  const initialState = JSON.parse(localStorage.getItem("tareas")) || [];

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state));
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch({ type: "add", value: inputValue.toUpperCase() });
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", value: id });
  };

  const handleUpdate = (item) => {
    dispatch({ type: "update", value: item });
  };

  return (
    <div className="container-fluid color-fondo">
      <div className="row my-5">
        <div className="col text-center">
          <div className="d-flex justify-content-center gap-2">
            <img src={logo} alt="logo react" />
            <h1>Tareas con useReducer</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Escribe tu tarea..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
        <div className="col-12 col-md-6 offset-md-3 mt-3">
          <ul>
            {state.map((item) => (
              <TareaApp
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
