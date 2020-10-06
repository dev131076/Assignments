import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(name, job) {
    this.setState((prevState) => ({
      people: [...prevState.people, { name, job }]
    }));
  }

  componentDidMount() {
    this.setState();
  }

  deletePerson(job) {
    return () => {
      this.setState((prevState) => ({
        people: prevState.people.filter((person) => person.job !== job)
      }));
    };
  }
  render() {
    console.log(this.state);

    return (
      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.state.people.map((person, index) => {
                return (
                  <tr key={person.job}>
                    <td>{person.name}</td>
                    <td>{person.job}</td>
                    <td>
                      <button onClick={this.deletePerson(person.job)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Form addPerson={this.addPerson} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
