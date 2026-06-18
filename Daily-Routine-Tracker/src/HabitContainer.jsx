import { createContext, useContext, useEffect, useState } from "react";

const RoutineContext = createContext();

export function RoutineProvider({ children }) {
  const [routines, setRoutines] = useState(() => {
    const saved = localStorage.getItem("routines");
    return saved ? JSON.parse(saved) : [];
  });

  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const addRoutine = (task, time) => {
    const newRoutine = {
      id: Date.now().toString(),
      task,
      time,
      completed: false
    };
    setRoutines([...routines, newRoutine]);
  };

  const deleteRoutine = (id) => {
    setRoutines(routines.filter((routine) => routine.id !== id));
  };

  const toggleRoutine = (id) => {
    setRoutines(
      routines.map((routine) =>
        routine.id === id
          ? { ...routine, completed: !routine.completed }
          : routine
      )
    );
  };

  const completedCount = routines.filter((r) => r.completed).length;

  return (
    <RoutineContext.Provider
      value={{
        routines,
        addRoutine,
        deleteRoutine,
        toggleRoutine,
        completedCount,
        isLogin,
        setIsLogin
      }}
    >
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutine() {
  return useContext(RoutineContext);
}