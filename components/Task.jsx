"use client"

import classNames from 'classnames';
import { useStore } from '../store';
import trash from '../public/assets/Icons/trash-2.svg';
import Image from 'next/image';

export default function Task({ title }) {
  // Find the task by title in the store
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  
  const setDraggedTask = useStore((store) => store.setDraggedTask); // Set the task being dragged
  const deleteTask = useStore((store) => store.deleteTask); // Function to delete a task

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)} // Handle drag start for the task
    >
      <div>{task.title}</div> 
      
      <div className="bottomWrapper">
        <div>
          
          <Image src={trash} onClick={() => deleteTask(task.title)} />
        </div>
        {/* Display the current state of the task */}
        <div className={classNames('status', task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
