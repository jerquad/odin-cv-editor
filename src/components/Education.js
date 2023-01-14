import React, { Component } from 'react';
import EducationDisplay from './EducationDisplay';
import EducationEdit from './EducationEdit';

class Education extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.props.hover.bind(this);
    }    

    render() {
        let edu;
        if (this.props.isEdit) {
            edu = <EducationEdit 
                    data={this.props.data}
                    toggle={this.props.toggle} 
                    hover={this.handleHover}
                    submit={this.props.submit} />
        } else {
            edu = <EducationDisplay 
                    data={this.props.data} 
                    toggle={this.props.toggle} 
                    hover={this.handleHover} />
        }
        return edu;
    }
}

export default Education;