import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
state = {
  title: ''
}

onChange = (e) => this.setState({ title: e.target.value});

onSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({title: ''});
}

  render() {
    return (
      <form onSubmit={this.onSubmit} style = {{ display: "flex"}}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex:'10', padding:'5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          name="Submit"
          className="btn"
          style={{flex:'1'}}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default AddTodo;
