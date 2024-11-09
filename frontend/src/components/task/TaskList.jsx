import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import TaskItem from './TaskItem';
import classes from './TaskList.module.scss';

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const getTasks = async () => {
    try {
      const { data } = await axios.get('/api/tasks/mytasks');
      setTaskList(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = taskList.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      (filter === 'all') ||
      (filter === 'completed' && task.completed) ||
      (filter === 'incomplete' && !task.completed) ||
      (filter === 'high-priority' && task.priority === 'high');
    return matchesSearch && matchesFilter;
  });


  const addNewTask = async (e) => {
    e.preventDefault();
    if (newTask.length <= 0) {
      toast.error('Task is empty');
      return;
    }
    try {
      const { data } = await axios.post('/api/tasks/', {
        title: newTask,
      });
      toast.success('New task added');
      setIsAddingNew(false);
      setNewTask('');
      setTaskList([{ ...data }, ...taskList]);
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (id, updatedTitle) => {
    try {
      const { data } = await axios.put(`/api/tasks/${id}`, { title: updatedTitle });
      setTaskList(taskList.map(task => task._id === id ? { ...task, title: data.title } : task));
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
    }
  };


  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success('Task deleted');
      setTaskList(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTaskCompletion = async (id) => {
    try {
      const taskToToggle = taskList.find((task) => task._id === id);
      const { data } = await axios.put(`/api/tasks/${id}`, { completed: !taskToToggle.completed });
      setTaskList(taskList.map(task => task._id === id ? { ...task, completed: data.completed } : task));
      toast.success('Task status updated');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={classes.topBar}>
        <button type="button" className={classes.addNew} onClick={() => setIsAddingNew(!isAddingNew)}>
          Add New
        </button>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={classes.searchInput}
        />
        {/* Filter Dropdown */}
        <select onChange={(e) => setFilter(e.target.value)} value={filter} className={classes.filterDropdown}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
          <option value="high-priority">High Priority</option>
        </select>
      </div>
      {isAddingNew && (
        <form className={classes.addNewForm} onSubmit={addNewTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task name"
          />
          <button type="submit">Add</button>
        </form>
      )}
      {filteredTasks.length > 0 ? (
        <table className={classes.taskList_table}>
          <tbody>
            {filteredTasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            ))}
          </tbody>
        </table>
      ) : (
        'No Task Found. Create a new task'
      )}
    </div>
  );
}

export default TaskList;
