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
      text: '' //'' empty string
    };

    // binding
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    // flip the value of isClicked on this.state

    const clickValue = this.state.isClicked; // this is reading - OK
    this.setState({isClicked: !clickValue}); // writing
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value;
    this.setState({text: inputValue});
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.setState({todos: [...this.state.todos, this.state.text]})
    this.setState({text: ''})
  }

  deleteItem = (index) => {
    console.log('was clicked!', index);
    let copyOfList = this.state.todos;
    copyOfList.splice(index, 1);
    this.setState({todos: [...copyOfList]});
  }

  render() {

    return (
      <>
        {console.log(this.state.isClicked)}

        {/* <button onClick={this.onClickHandler}>
          Click Here!
        </button> */}
        <form onSubmit={this.onSubmitHandler}>
          <input type='text' value={this.state.text} onChange={this.onChangeHandler}></input>
          <button type='submit'>Submit Here</button>
        </form>
        <ol>{this.state.todos.map((todo, index) => {
          return <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteItem}/>
        })}</ol>
        {this.props.name}
      </>
    );

  }
}
