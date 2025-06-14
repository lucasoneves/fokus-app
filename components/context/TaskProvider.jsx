import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTasks = (description) => {
    console.log("tarefa vai ser adicionada");
    setTasks((oldState) => {
      return [
        ...oldState,
        {
          description,
          id: oldState.length + 1,
        },
      ];
    });
  };

  const toogleTaskCompleted = (id) => {
    setTasks((oldState) => {
      return oldState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((oldState) => {
      return oldState.filter((task) => {
        if (task.id != id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTasks, toogleTaskCompleted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
