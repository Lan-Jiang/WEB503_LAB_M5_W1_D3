import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import {ListGroup, ListGroupItem} from "reactstrap";
import $ from "jquery";
import { Button } from 'reactstrap';



function Todos(props) {
  handleNote = (getNote) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
  };
  dismissNote =() => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
  }
    return (
      <ListGroup>
        {props.todolists.map((todolist) => (
         <ListGroupItem 
         key={todolist.id}
         tag="button" 
         onClick={() => this.handleNote(todolist.note)}
         className="align-self-center py-2 w-50 bg-info text-white">
        {todolist.text}
        </ListGroupItem>
        ))}
        <ListGroupItem 
         id="notebox"
         className="border border-dark rounded m-5">
        <div id="note" className="mt-1 font-weight-bold text-dark"></div>
        <button
          id="btn"
          className="w-25 mt-2 align-self-center bg-warning border-0"
          onClick={() => this.dismissNote()}
        > Done </button>
        </ListGroupItem>
      </ListGroup>
    );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList1: [
        {id: 1,  text: "Cook Breakfast", note:"Make Eggs and Pancakes", done: false},
        {id: 2,  text: "Walk Dog", note:"Bring doggie bag", done: false},
        {id: 3,  text: "Take Shower", note:"Shower no later than 10AM!", done: false}
      ],
      TodoList2: [
        {id: 1,  text: "Get Lunch", note:"Lunch at sandbox", done: false},
        {id: 2,  text: "Run a Mile", note:"Stop by mom at end of run",done: false},
        {id: 3,  text: "Take Bath", note:"Prep half hour before. Replenish bath oil.",done: false}
      ]
    };
  }
  render() {
  let d = new Date(); /*Get current date */

  let day = new Array(7);
  day[0] = "Sunday";
  day[1] = "Monday";
  day[2] = "Tuesday";
  day[3] = "Wednesday";
  day[4] = "Thursday";
  day[5] = "Friday";
  day[6] = "Saturday";

  let n = day[d.getDay()];

  let todo;

  if (n === 'Monday') {
    todo = <Todos todolists={this.state.TodoList1} />;
  } else if (n === 'Tuesday') {
    todo = <Todos todolists={this.state.TodoList2} />;
  } else if (n === 'Wednesday') {
    todo = <Todos todolists={this.state.TodoList1} />;
  } else if (n === 'Thursday') {
    todo = <Todos todolists={this.state.TodoList2} />;
  } else if (n === 'Friday') {
    todo = <Todos todolists={this.state.TodoList1} />;
  } else if (n === 'Saturday') {
    todo = <Todos todolists={this.state.TodoList2} />;
  } else if (n === 'Sunday') {
    todo = <Todos todolists={this.state.TodoList1} />;
  }

  return (
    <div className="App">
      <h1>
      <span className="d-flex justify-content-center text-warning">
      {n}'s
      </span>
      Todo List
      </h1>
      {todo}
      {/* <TodoList1 />
      <TodoList2 /> */}
      {/* <ul>
        <li>Cook Breakfast</li>
        <li>Walk Dog</li>
        <li>Take Shower</li>
      </ul> */}
    </div>
  );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="btn btn-danger"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <Button color="danger">Danger!</Button> */}
//       </header>
//     </div>
//   );
// }

export default App;


