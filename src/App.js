import React, { Component } from 'react';
import Personal from './components/Personal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editPersonal: false,
      personal: {
        name: 'John Dough',
        title: 'Goblin',
        email: 'email@me.gov',
        phone: '867-5309'
      },
    }

    this.togglePersonal = this.togglePersonal.bind(this);
    this.handleSubmitPersonal = this.handleSubmitPersonal.bind(this);
  }

  togglePersonal() {
    this.setState(prevState => ({
      editPersonal: !prevState.editPersonal
    }));
  }

  handleSubmitPersonal(e, newData) {
    e.preventDefault();
    this.setState({personal: newData})
    this.togglePersonal();
  }

  render() {
    return (
      <div>
        <Personal isEdit={this.state.editPersonal} data={this.state.personal} toggle={this.togglePersonal} submit={this.handleSubmitPersonal} />
      </div>
    )
  }
}

export default App;
