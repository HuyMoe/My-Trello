import React from "react";
import "./Column.scss";
import Task from "../Task/Task";

function Column() {
  return (
    <div className="columns">
      <header className="header-task"> Title </header>
      <ul className="task-list">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </ul>
      <footer className="footer-task"> Add another card </footer>
    </div>
  );
}

export default Column;
