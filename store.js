import { produce } from 'immer'; // Immer for immutable state updates
import { create } from 'zustand'; // Zustand for state management
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

const store = (set) => ({
  tasks: [], // Task list
  draggedTask: null, // Currently dragged task
  tasksInOngoing: 0, // Counter for tasks in the 'ONGOING' state

  // Function to add a new task
  addTask: (title, state) =>
    set(
      produce((store) => {
        store.tasks.push({ title, state }); // Add task to task list
      }),
      false,
      'addTask'
    ),

  // Function to delete a task by title
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),

  // Function to set the currently dragged task
  setDraggedTask: (title) => set({ draggedTask: title }),

  // Function to move a task to a different state
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

// Middleware for logging actions in the store
const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args); // Log the arguments to the console
      set(...args);
    },
    get,
    api
  );

// Create the Zustand store with devtools, persistence, and subscription
export const useStore = create(
  subscribeWithSelector(log(persist(devtools(store), { name: 'store' })))
);

// Subscription to track tasks in the 'ONGOING' state
useStore.subscribe(
  (store) => store.tasks,
  (newTasks, prevTasks) => {
    useStore.setState({
      tasksInOngoing: newTasks.filter((task) => task.state === 'ONGOING').length,
    });
  }
);
