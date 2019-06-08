import React from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'

class App extends React.Component {

  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        isCompleted: true
      },
      {
        title: 'Learn Data Science',
        id: 2,
        isCompleted: false
      },
      {
        title: 'Complete BOSM backend',
        id: 3,
        isCompleted: false
      }
    ]
  }

// Toggle isCompleted
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }) })
  }

// Delete a todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <Header />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
    </div>
  );
 }
}

export default App;
