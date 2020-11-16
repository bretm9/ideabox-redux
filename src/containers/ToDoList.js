import React from 'react';
import { connect } from 'react-redux';
const ToDoList = ({todos}) => {
  const todosToDisplay = todos.map((todo, i) => {
    return <li key={i}>{todo.todo}</li>
  });
  return (
    <ul>
      {todosToDisplay}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);