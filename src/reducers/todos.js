export const todos = (
  state = { todos: [], completed: [], incomplete: [], setting: "" },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      // return (state.todos.todos = [
      //   ...state.todos.todos,
      //   { id: Date.now(), todo: action.todo, completed: false },
      // ]);

      return {
        todos: [
          ...state.todos,
          { id: Date.now(), todo: action.todo, completed: false },
        ],
        completed: [],
        incomplete: [],
        setting: "",
      };
    case "UPDATE_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
        completed: state.todos.filter((todo) => todo.completed === true),
        incomplete: state.todos.filter((todo) => todo.completed === false),
        setting: "",
      };
    case "SHOW_ALL_TODO":
      return {
        todos: state.todos,
        completed: state.todos.filter((todo) => todo.completed === true),
        incomplete: state.todos.filter((todo) => todo.completed === false),
        setting: action.setting,
      };
    case "SHOW_INCOMPLETE":
      return {
        todos: state.todos,
        completed: state.todos.filter((todo) => todo.completed === true),
        incomplete: state.todos.filter((todo) => todo.completed === false),
        setting: action.setting,
      };
    case "SHOW_COMPLETED":
      return {
        todos: state.todos,
        completed: state.todos.filter((todo) => todo.completed === true),
        incomplete: state.todos.filter((todo) => todo.completed === false),
        setting: action.setting,
      };
    default:
      return state;
  }
};
