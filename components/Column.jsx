"use client"

import { useStore } from '../store'; // Zustand store for state management
import Task from './Task'; 
import { useState, useMemo } from 'react'; 
import classNames from 'classnames'; 
import { shallow } from 'zustand/shallow'; 

export default function Column({ state }) {
  const [text, setText] = useState(''); 
  const [open, setOpen] = useState(false); 
  const [drop, setDrop] = useState(false); 

  // Retrieve tasks from Zustand store, shallow comparison avoids unnecessary re-renders
  const tasks = useStore(
    (store) => store.tasks,
    shallow
  );
  
  // Memoize filtered tasks for performance optimization
  const filteredTasks = useMemo(() => tasks.filter((task) => task.state === state), [tasks, state]);

  const addTask = useStore((store) => store.addTask); 
  const setDraggedTask = useStore((store) => store.setDraggedTask); 
  const draggedTask = useStore((store) => store.draggedTask); 
  const moveTask = useStore((store) => store.moveTask); 

  return (
    <div
      className={classNames('column', { drop })} 
      onDragOver={(e) => {
        if (!drop) setDrop(true); // Set drop state on drag over
        e.preventDefault(); 
      }}
      onDragLeave={(e) => {
        if (drop) setDrop(false); // Reset drop state when drag leaves
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false); 
        moveTask(draggedTask, state); // Move dragged task to the current column
        setDraggedTask(null); // Clear the dragged task after dropping
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p> 
        <button onClick={() => setOpen(true)}>Add</button> {/* Open modal to add a task */}
      </div>

      {/* Render filtered tasks */}
      {filteredTasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}

      {/* Task addition modal */}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input 
              onChange={(e) => setText(e.target.value)} 
              value={text} 
            />
            <button
              onClick={() => {
                addTask(text, state); // Add new task to the current column
                setText(''); 
                setOpen(false); // Close modal after adding task
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
