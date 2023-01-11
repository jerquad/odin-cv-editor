import React, { Component } from 'react';
import Personal from './components/Personal'
import './style/app.css'

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
      </div>
    )
  }
}

export default App;
