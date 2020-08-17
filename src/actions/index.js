export const addToDo = (todo) => ({ type: "ADD_TODO", todo });

export const updateToDo = (id) => ({
  type: "UPDATE_TODO",
  id,
});

// show all todos (exact same as what is currently in todolist)

export const showAllToDo = () => ({ type: "SHOW_ALL_TODO", setting: "all" });

export const showIncomplete = () => ({
  type: "SHOW_INCOMPLETE",
  setting: "incomplete",
});

export const showCompleted = () => ({
  type: "SHOW_COMPLETED",
  setting: "completed",
});

// show all completed todos (will require filtering in todos )

// show all in-progress todos (logic should be the same as above )
