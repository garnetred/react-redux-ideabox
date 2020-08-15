import React from "react";
import { connect } from "react-redux";
import { updateToDo } from "../actions";

const ToDo = ({ id, todo, completed, updateToDo }) => {
  //   if (completed) {
  //     return <li className="completed">{todo}</li>;
  //   } else {
  //     console.log("in else");
  //     return (
  //       <>
  //         <li className="not-completed">{todo}</li>
  //         <button onClick={(completed) => updateToDo(completed)}>
  //           Complete{" "}
  //         </button>
  //       </>
  //     );
  //   }
  return (
    <li
      className={completed ? "completed" : "not-completed"}
      onClick={() => updateToDo(id)}
    >
      {todo}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateToDo: (id) => dispatch(updateToDo(id)),
});
export default connect(null, mapDispatchToProps)(ToDo);
