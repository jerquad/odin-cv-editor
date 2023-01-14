import React, { Component } from 'react';

class PracticalDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const listItems = data.map((value) =>
            <li key={value.key}>
                <h4>{value.org}</h4>
                <h5>{`${value.role}, ${value.year}`}</h5>
                <h5>{value.desc}</h5>
            </li>
        );
        return (
            <div 
             id='prac' 
             className='section'
             onMouseEnter={() => this.props.hover('#prac .toggle-edit')}
             onMouseLeave={() => this.props.hover('#prac .toggle-edit')}>
                <h3>PRACTICAL EXPERIENCE</h3>
                <ul>{listItems}</ul>
                <button
                 className='toggle-edit hide'
                 onClick={(e) => this.props.toggle('editPractical')}>
                    EDIT
                </button>
            </div>
        )
    }
}

export default PracticalDisplay;