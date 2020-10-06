import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class Form extends Component {
    constructor() {
      super();
      this.formSubmit = this.formSubmit.bind(this);
    }
  
    formSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const job = form.elements["job"].value;
      const name = form.elements["name"].value;
      this.props.addPerson(name, job);
      form.reset();
    }
  
    render() {
      return (
        
        <form onSubmit={this.formSubmit} >
          <div style={{marginLeft:'25px'}}>Add New Employee</div>
            <div style={{marginLeft:'25px'}}>Name</div>
          <input style={{marginLeft:'25px'}}
            id="name"
            type="text" className="form-control"
            defaultValue=""
            placeholder="Name..."
          />
          
          <div style={{marginLeft:'25px'}}>Job</div>
          <input style={{marginLeft:'25px'}}
            id="job"
            type="text" className="form-control"
            defaultValue=""
            placeholder="Job..."
          />
        <div style={{marginLeft:'25px'}}> <input type="submit" value="Submit" /></div> 
        </form>
      );
    }
  }
  

export default Form
