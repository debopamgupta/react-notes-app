import React, { Component } from "react";
import NotesList from "./NotesList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      notes: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
    // Add note with value
    let notes = this.state.notes;
    notes.push({ title: this.state.value, done: false });
    this.setState({ value: "", todos: notes });
  }

  // HELP FROM CJ
  // https://github.com/CodingGarden/intro-react-todo/tree/master/todo-app/src

  toggleTodoDone(event, index) {
    const notes = [...this.state.notes]; // copy the array
    notes[index] = {
      ...notes[index],
      done: event.target.checked // update done property on copied todo
    }; // copy the todo can also use Object.assign
    this.setState({
      notes
    });
  }

  removeTodo(index) {
    const notes = [...this.state.notes]; // copy the array
    notes.splice(index, 1);

    this.setState({
      notes
    });
  }

  allDone() {
    this.setState({
      notes: []
    });
  }

  render() {
    return (
      <div className="App">
        <div className="links">
          <a href="https://github.com/debopamgupta">
            <svg
              height="28"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
        <header className="Heading">
          <h1> Notes </h1>
        </header>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="input is-warning tex is-rounded"
              type="text"
              value={this.state.value}
              placeholder="Add New Notes..."
              onChange={this.handleChange}
            />
          </label>
        </form>
        {this.state.notes.length === 0 ? (
          <div className="empty">
            <svg x="0px" y="0px" className="empty-svg" viewBox="0 0 172 172">
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#cccccc">
                  <path d="M52.5675,20.64c-0.55094,0.12094 -1.075,0.37625 -1.505,0.7525l-35.1525,26.9825c-0.04031,0.04031 -0.06719,0.06719 -0.1075,0.1075c-0.04031,0 -0.06719,0 -0.1075,0c-0.26875,0.14781 -0.52406,0.3225 -0.7525,0.5375c-0.04031,0.04031 -0.06719,0.06719 -0.1075,0.1075c-0.06719,0.02688 -0.14781,0.06719 -0.215,0.1075c0,0.04031 0,0.06719 0,0.1075c-0.12094,0.13438 -0.22844,0.28219 -0.3225,0.43c-0.04031,0.06719 -0.08062,0.14781 -0.1075,0.215c-0.04031,0.04031 -0.06719,0.06719 -0.1075,0.1075c-0.08062,0.17469 -0.16125,0.34938 -0.215,0.5375l-13.545,26.9825c-0.67188,1.33031 -0.41656,2.92938 0.63156,3.99094c1.06156,1.04813 2.66062,1.30344 3.99094,0.63156l8.815,-4.4075v70.09c0,1.89469 1.54531,3.44 3.44,3.44h103.2c0.04031,0 0.06719,0 0.1075,0c0.215,-0.01344 0.43,-0.05375 0.645,-0.1075c0.1075,-0.02687 0.215,-0.06719 0.3225,-0.1075c0.43,-0.13437 0.83313,-0.34937 1.1825,-0.645c0.08063,-0.06719 0.14781,-0.13437 0.215,-0.215c0.08063,-0.06719 0.14781,-0.13437 0.215,-0.215l0.215,-0.3225c0.08063,-0.06719 0.14781,-0.13437 0.215,-0.215l27.09,-33.8625c0.48375,-0.60469 0.7525,-1.37062 0.7525,-2.15v-32.895l19.6725,-19.6725c1.08844,-1.14219 1.26313,-2.86219 0.43,-4.1925l-20.1025,-33.4325c-0.12094,-0.55094 -0.37625,-1.075 -0.7525,-1.505c-0.02687,-0.06719 -0.06719,-0.14781 -0.1075,-0.215c-0.04031,0 -0.06719,0 -0.1075,0c-0.02687,-0.06719 -0.06719,-0.14781 -0.1075,-0.215c-0.04031,0 -0.06719,0 -0.1075,0c-0.06719,-0.08062 -0.13437,-0.14781 -0.215,-0.215c-0.24187,-0.13437 -0.48375,-0.24187 -0.7525,-0.3225c-0.06719,-0.04031 -0.14781,-0.08062 -0.215,-0.1075c-0.04031,0 -0.06719,0 -0.1075,0c-0.06719,-0.04031 -0.14781,-0.08062 -0.215,-0.1075c-0.04031,0 -0.06719,0 -0.1075,0c-0.06719,0 -0.14781,0 -0.215,0c-0.04031,0 -0.06719,0 -0.1075,0c-0.06719,0 -0.14781,0 -0.215,0c-0.04031,0 -0.06719,0 -0.1075,0h-94.7075c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM54.2875,27.52h85.2475l-20.64,20.64h-91.59zM147.275,29.67l16.985,28.165l-22.575,22.575l-16.985,-28.165zM20.64,55.04h96.32v89.44h-96.32v-71.81c0.01344,-0.14781 0.01344,-0.28219 0,-0.43zM123.84,63.855l14.2975,23.865c0.52406,0.91375 1.45125,1.54531 2.49938,1.69313c1.04812,0.14781 2.10969,-0.20156 2.87562,-0.94063l0.9675,-0.9675v24.8325l-20.64,25.8zM13.76,66.22v3.87l-2.58,1.29zM50.6325,68.8c-1.89469,0.26875 -3.225,2.02906 -2.95625,3.92375c0.26875,1.89469 2.02906,3.225 3.92375,2.95625h34.4c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-34.4c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0z"></path>
                </g>
              </g>
            </svg>
            <br />
            <h3>So empty here...</h3>
          </div>
        ) : (
          <>
            <NotesList
              notes={this.state.notes}
              toggleTodoDone={this.toggleTodoDone.bind(this)}
              removeTodo={this.removeTodo.bind(this)}
            />
            <button className="clearBtn" onClick={() => this.allDone()}>
              Clear List
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
