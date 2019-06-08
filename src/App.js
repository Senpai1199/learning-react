import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {

  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        isCompleted: false
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
  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
 }
}

export default App;
