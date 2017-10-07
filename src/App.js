import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

//import component here.
import {Form} from './FormComponent';

//import other files here.
import logo from './abjad.svg';
import './App.css';

//parent component.
export class App extends Component {

  constructor(props){
    super(props);

    //set initial state.
    this.state = {
      name: '',
      todo: [{task: 'uni', isDone: true}, {task: 'office', isDone: false}, {task: 'cooking', isDone: true}]
    };

    //bind this in method.
    this.updateTodo = this.updateTodo.bind(this);
  }

  //custom methods.
  updateTodo(text){
    this.setState({ todo: [ {task: text, isDone: false}, ...this.state.todo ] });
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>

          </header>
          <p className="App-intro">
              اب آپ urdu لکھ سکتے ہیں

          </p>
            <Button label="Test Button" raised primary />
        </div>
    );
  }

}
