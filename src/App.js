import React, { Component } from 'react';
import uniqid from 'uniqid';
import Personal from './components/Personal';
import Education from './components/Education';
import Practical from './components/Practical';
import ProfilePic from './components/ProfilePic';
import './style/app.css';
import proPic from './img/kamen.PNG';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePic: proPic,
      editPersonal: false,
      personal: {
        name: 'John Dough',
        title: 'Computer Goblin',
        email: 'email@me.gov',
        phone: '867-5309'
      },
      editEducation: false,
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
      editPractical: false,
      practical: [
        {
          key: uniqid(),
          org: 'The Candy Shop',
          role: 'Hustler',
          year: '1984-present',
          desc: 'I\'ll take you to the candy shop, want one taste of what I got? I\'ll have you spendin\' all you got Keep goin\' until you hit the spot, woah'
        },
        {
          key: uniqid(),
          org: 'Ball Busters',
          role: 'Junior Buster',
          year: '2020',
          desc: 'Overseeing day to day opperations of balls, busting, and high efficiency ball busting'
        }
      ]
    }

    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
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

  handleHover(target) {
    document.querySelector(target).classList.toggle('hide');
  }

  handlePicChange(e) {
    this.setState({
      profilePic: URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    return (
      <div id='content'>
        <div id='resume-head'>
          <Personal
            isEdit={this.state.editPersonal}
            data={this.state.personal}
            toggle={this.toggleEdit}
            submit={this.handleSubmitEdit}
          />
          <ProfilePic
           pic={this.state.profilePic}
           hover={this.handleHover}
           change={this.handlePicChange}
          />
        </div>
        <Education
          isEdit={this.state.editEducation}
          data={this.state.education}
          hover={this.handleHover}
          toggle={this.toggleEdit}
          submit={this.handleSubmitEdit}
        />
        <Practical 
         isEdit={this.state.editPractical}
         data={this.state.practical}
         hover={this.handleHover}
         toggle={this.toggleEdit}
         submit={this.handleSubmitEdit}
        />
      </div>
    )
  }
}

export default App;
