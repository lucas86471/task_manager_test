import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar React, Node e JavaScript",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer Exercícios",
      description: "Fazer exercícios de lógica e algoritmos",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler Livros",
      description: "Ler livros sobre desenvolvimento de software",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTasks />
      </div>
    </div>
  );
}

export default App;
