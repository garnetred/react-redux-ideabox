import React from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { bindActionCreators } from "redux";

const ToDoList = ({ todos, completed, incompletes, setting }) => {
  console.log(setting);
  // need to set it up so this doesn't happen by default, only when the button is clicked?
  let tasks;

  if (setting === "all") {
    tasks = todos;
  } else if (setting === "completed") {
    tasks = completed;
  } else if (setting === "incomplete") {
    tasks = incompletes;
  } else {
    return <p>Please input a task!</p>;
  }

  if (tasks.length === 0) {
    return <p>There are no tasks that meet that criteria. Please try again.</p>;
  }
  const allToDos = tasks.map((item) => {
    return <ToDo {...item} key={item.id} />; //return component
  });

  return <ul>{allToDos}</ul>;
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  incompletes: state.todos.incomplete,
  completed: state.todos.completed,
  setting: state.todos.setting,
});

// this is wrong, won't they all come through as todos? hmm

export default connect(mapStateToProps)(ToDoList);
