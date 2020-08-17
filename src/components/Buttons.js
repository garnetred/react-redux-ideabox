import React from "react";
import { connect } from "react-redux";
import { showAllToDo, showIncomplete, showCompleted } from "../actions";

const Buttons = ({ showAllToDo, showIncomplete, showCompleted }) => {
  return (
    <section className="all-buttons">
      <button className="show-all-button" onClick={() => showAllToDo()}>
        Show All
      </button>
      <button
        className="show-inprogress-button"
        onClick={() => showIncomplete()}
      >
        Show Incomplete
      </button>
      <button className="show-completed-button" onClick={() => showCompleted()}>
        Show Completed
      </button>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showAllToDo: () => dispatch(showAllToDo()),
  showIncomplete: () => dispatch(showIncomplete()),
  showCompleted: () => dispatch(showCompleted()),
});

export default connect(null, mapDispatchToProps)(Buttons);
