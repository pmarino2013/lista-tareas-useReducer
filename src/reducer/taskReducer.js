const taskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date().getTime(),
          tarea: action.value,
        },
      ];
    case "delete":
      return state.filter((item) => item.id != action.value);
    case "update":
      return state.map((tarea) => {
        if (tarea.id == action.value.id) {
          return action.value; //{id:234232, tarea:'sacar la basura'}
        } else {
          return tarea;
        }
      });
    default:
      return state;
  }
};

export default taskReducer;
