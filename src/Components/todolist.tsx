import React, { MouseEvent } from "react";
import { TodoType } from "../interfaces/interfaces";

interface TodoListProps {
  list: TodoType;
  completedTaks(id: number): void;
}

export const Todolist = ({ list, completedTaks }: TodoListProps) => {
  return (
    <li>
      <span className="task">{list.task}</span>
      <span className="date">{list.date}</span>
      <button
        className="done-btn"
        onClick={() => {
          completedTaks(list.id);
        }}
      >
        ✔
      </button>
    </li>
  );
};
