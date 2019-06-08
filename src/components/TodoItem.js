import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

 // for changing the state we have to climb the whole tree, go up level by level
  markComplete = (e) => {

  }
  render() {
    const {id, title} = this.props.todo
    return(
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    );
 }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: 'none',
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",

}

export default TodoItem;
