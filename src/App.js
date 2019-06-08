import React from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'uuid'

class App extends React.Component {

  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: uuid.v4(),
        isCompleted: true
      },
      {
        title: 'Learn Data Science',
        id: uuid.v4(),
        isCompleted: false
      },
      {
        title: 'Complete BOSM backend',
        id: uuid.v4(),
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

//Add todo
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title,
    isCompleted: false,
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}
  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    </div>
  );
 }
}

export default App;
