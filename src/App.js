import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TodoCard from './TodoCard';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      inputValue: '' //'' empty string
    };

    // binding
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    // flip the value of isClicked on this.state

    const clickValue = this.state.isClicked; // this is reading - OK
    this.setState({isClicked: !clickValue}); // writing
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({todos: [...this.state.todos, this.state.inputValue]})
    this.setState({inputValue: ''})
  }

  render() {

    return (
      <>
        {console.log(this.state.isClicked)}

        {/* <button onClick={this.onClickHandler}>
          Click Here!
        </button> */}
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type='submit'>Submit Here</button>
        </form>
        <ol>{this.state.todos.map((todo, index) => {
          return <TodoCard key={index} title={todo}/>
        })}</ol>
        {this.props.name}
      </>
    );

  }
}
