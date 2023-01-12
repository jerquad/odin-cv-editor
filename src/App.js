import React, { Component } from 'react';
import uniqid from 'uniqid';
import Personal from './components/Personal';
import Education from './components/Education';
import './style/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editPersonal: false,
      personal: {
        name: 'John Dough',
        title: 'Computer Goblin',
        email: 'email@me.gov',
        phone: '867-5309'
      },
      editEducation: true,
      education: [
        {
          key: uniqid(),
          inst: 'School of Hard Rocks',
          study: 'The Blues',
          year: '2020'
        },
        {
          key: uniqid(),
          inst: 'The Odin Project',
          study: 'Full Stack Development',
          year: '2022-2023'
        },
      ],
    }

    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleSubmitEdit(e, target, newData) {
    e.preventDefault();
    this.setState({[target]: newData});
  }

  toggleEdit(target) {
    this.setState(prevState => ({
      [target]: !prevState[target]
    }))
  }

  render() {
    return (
      <div id='content'>
        <Personal 
          isEdit={this.state.editPersonal} 
          data={this.state.personal} 
          toggle={this.toggleEdit} 
          submit={this.handleSubmitEdit}
        />
        <Education
          isEdit={this.state.editEducation}
          data={this.state.education}
          toggle={this.toggleEdit}
          submit={this.handleSubmitEdit}
        />
      </div>
    )
  }
}

export default App;
