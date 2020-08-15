export const addToDo = (todo) => ({ type: "ADD_TODO", todo });

export const updateToDo = (id) => ({
  type: "UPDATE_TODO",
  id,
});
