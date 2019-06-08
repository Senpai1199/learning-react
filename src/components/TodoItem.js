import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const {id, title} = this.props.todo
    return(
      <div>
        <p>{title}</p>
      </div>
    );
 }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
