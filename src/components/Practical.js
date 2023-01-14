import React, { Component } from 'react';
import PracticalDisplay from './PracticalDisplay';
import PracticalEdit from './PracticalEdit';

class Practical extends Component {
    constructor(props) {
        super(props);
        
        this.handleHover = this.props.hover.bind(this);
    }

    render() {
        let prac;
        if (this.props.isEdit) {
            prac = <PracticalEdit 
                    data={this.props.data}
                    toggle={this.props.toggle}
                    hover={this.props.hover}
                    submit={this.props.submit}/>
        } else {
            prac = <PracticalDisplay 
                    data={this.props.data}
                    toggle={this.props.toggle}
                    hover={this.handleHover} />
        }
        return prac;
    }
}

export default Practical;