import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './TaskItem.module.scss';

function TaskItem({ task, deleteTask, editTask, toggleTaskCompletion }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);
      await toggleTaskCompletion(task._id);
      setIsCompleted(!isCompleted);
      toast.success('Task status updated successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      setIsLoading(true);
      await editTask(task._id, newTitle);
      setIsEditing(false);
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <tr className={classes.task_item}>
      <td className={classes.task_name}>
        <div className={classes.checkbox} onClick={handleCheckboxClick} role="checkbox" aria-checked={isCompleted}>
          <input type="checkbox" checked={isCompleted} disabled={isLoading} readOnly tabIndex={-1} />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleSaveClick}
            className={classes.editInput}
          />
        ) : (
          <p onDoubleClick={handleEditClick}>{task.title}</p>
        )}
      </td>
      <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
      <td>{moment(task.createdAt).format('MMM Do YY')}</td>
      <td>
        <button type="button" className={classes.deleteBtn} onClick={() => deleteTask(task._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
