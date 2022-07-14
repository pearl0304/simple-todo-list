import { TodoType } from "../interfaces/interfaces";

interface TodoListProps {
  list: TodoType;
  completedTaks(id: number): void;
}

export const Todolist = ({ list, completedTaks }: TodoListProps) => {
  return (
    <tr>
      <td>{list.task}</td>
      <td>{list.date}</td>
      <td>
        <button
          className="done-btn"
          onClick={() => {
            completedTaks(list.id);
          }}
        >
          <p>✔</p>
        </button>
      </td>
    </tr>
  );
};
