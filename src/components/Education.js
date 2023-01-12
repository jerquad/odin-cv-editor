import React, { Component } from 'react';
import uniqid from 'uniqid'

class Education extends Component {
    constructor(props) {
        super (props);

        // const toState = {};
        // this.props.data.forEach(item => {
        //     toState[item.key] = item
        // })

        this.state = this.propsToState();

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    propsToState() {
        const toState = {};
        this.props.data.forEach(item => {
            const copy = {};
            for (const [key, value] of Object.entries(item)) {
                copy[key] = value;
            }
            toState[item.key] = copy;
        })
        return toState;
    }

    handleCancel() {
        // console.log(this.state)
        for (const [key, value] of Object.entries(this.propsToState())) {
            // console.log(value);
            this.setState({[key]: value});
        }
        console.log(this.props.data);
        this.props.toggle('editEducation');
    }

    handleChange(e, key) {
        const newState = this.state[key];
        newState[e.target.name] = e.target.value;
        this.setState({key: newState})
    }

    handleHover() {
        document.querySelector('#edu .toggle-edit').classList.toggle('hide');
    }

    createStatic() {
        const data = this.props.data;
        const listItems = data.map((value) =>
            <li key={value.key}>
                <h4>{value.inst}</h4>
                <h5>{`${value.study}, ${value.year}`}</h5>
            </li>
        );
        return(
            <div id='edu' className='section' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <h3>EDUCATION</h3>
                <ul>{listItems}</ul>
                <button className='toggle-edit hide' onClick={(e) => this.props.toggle('editEducation')}>Edit</button>
            </div>
        )
    }

    createEdit() {
        const data = this.props.data;
        console.log(data)
        const listItems = data.map((value) => 
            <li key={value.key}>
                <label>
                    INSTITUTION
                    <input id={`${value.key}-inst`} name='inst' type='text' value={value.inst} onChange={(e) => this.handleChange(e, value.key)} />
                </label>
                <label>
                    COURSE OF STUDY
                    <input id={`${value.key}-inst`} name='study' type='text' value={value.study} onChange={(e) => this.handleChange(e, value.key)} />
                </label>
                <label>
                    YEAR(S) ATTENDED
                    <input id={`${value.key}-inst`} name='year' type='text' value={value.year} onChange={(e) => this.handleChange(e, value.key)} />
                </label>
            </li>
        );
        return (
            <div id='edu' className='section'>
                <h3>EDUCATION</h3>
                <form id='edu-e-form'>
                    <ul>{listItems}</ul>
                    <div className='edit-confirm'>
                    <input id='edu-e-submit' type='submit' value='SAVE' onClick={(e) => {
                            this.props.submit(e, 'education', this.state);
                            this.props.toggle('editEducation')}} />
                        <button id='edu-e-cancel' onClick={this.handleCancel}>CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return this.props.isEdit ? this.createEdit() : this.createStatic();
    }
}

export default Education;