import React, { useState, ChangeEvent } from "react";
import { Todolist } from "./todolist";
import { TodoType } from "../interfaces/interfaces";

export const Todoform = () => {
  const [input, setInput] = useState<TodoType>({
    task: "",
    date: "",
    id: 0,
  });

  const [todo, setTodo] = useState<TodoType[]>([]);
  const { task, date, id } = input;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    const newTask = { task: task, date: date, id: timestamp };
    setTodo([newTask, ...todo]);
    setInput({ task: "", date: "", id: 0 });
  };

  const completedTaks = (id: number): void => {
    setTodo(
      todo.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className="todo-wrap">
      <div className="todo-form-container">
        <form className="todo-form" onSubmit={onSubmit}>
          <input
            name="task"
            type="text"
            onChange={onChange}
            value={task}
            required
          ></input>
          <input
            name="date"
            type="date"
            onChange={onChange}
            value={date}
          ></input>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="todo-list-container">
        <ul>
          {todo.map((tasks: TodoType, index: number) => {
            return (
              <Todolist
                key={index}
                list={tasks}
                completedTaks={completedTaks}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
