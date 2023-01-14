import React, { Component } from "react";

class EducationDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const listItems = data.map((value) =>
            <li key={value.key}>
                <h4>{value.inst}</h4>
                <h5>{`${value.study}, ${value.year}`}</h5>
            </li>
        );
        return(
            <div 
             id='edu' 
             className='section' 
             onMouseEnter={() => this.props.hover('#edu .toggle-edit')} 
             onMouseLeave={() =>this.props.hover('#edu .toggle-edit')}>
                <h3>EDUCATION</h3>
                <ul>{listItems}</ul>
                <button 
                 className='toggle-edit hide'
                 onClick={(e) => this.props.toggle('editEducation')}>
                    EDIT
                </button>
            </div>
        )
    }   
}

export default EducationDisplay;