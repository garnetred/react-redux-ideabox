import React from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";

const ToDoList = ({ todos }) => {
  console.log(todos);

  const allToDos = todos.map((item) => {
    return <ToDo {...item} key={item.id} />; //return component
  });
  return <ul>{allToDos}</ul>;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(ToDoList);
