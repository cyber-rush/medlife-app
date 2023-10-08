import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {

  const [taskType, setTaskType] = useState('upcoming');

  const selectUpcomingTasks = () => {
    setTaskType('upcoming');
  };

  const selectCompletedTasks = () => {
    setTaskType('completed');
  };

  return (
    <TaskContext.Provider value={{ taskType, selectUpcomingTasks, selectCompletedTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)