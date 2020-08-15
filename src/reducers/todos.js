export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("add todos");
      return [
        ...state,
        { id: Date.now(), todo: action.todo, completed: false },
      ];
    case "UPDATE_TODO":
      console.log("in todos");
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};
