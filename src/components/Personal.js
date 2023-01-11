import React, { Component } from "react";
import '../style/personal.css'


class Personal extends Component {
    constructor(props) {
        super(props)

        this.state = this.props.data;

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCancel() {
        for (const [key, value] of Object.entries(this.props.data)) {
            this.setState({[key]: value})
        }
        this.props.toggle('editPersonal');
    }

    handleHover() {
        document.querySelector('#psnl .toggle-edit').classList.toggle('hide');
    }

    createStatic() {
        return (
            <div id='psnl' className='section' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <h1 id='psnl-s-name'>{this.props.data.name}</h1>
                <h2 id='psnl-s-title'>{this.props.data.title}</h2>
                <h3 id='psnl-s-email'>{this.props.data.email}</h3>
                <h3 id='psnl-s-phone'>{this.props.data.phone}</h3>
                <button className='toggle-edit hide' onClick={(e) => this.props.toggle('editPersonal')}>Edit</button>
            </div>
        )
    }

    createEdit() {
        return (
            <div id='psnl' className='section'>
                <form id='psnl-e-form'>
                    <label>
                        NAME
                        <input id='psnl-e-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        TITLE
                        <input id='psnl-e-title' name='title' type='text' value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        EMAIL
                        <input id='psnl-e-email' name='email' type='text' value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        PHONE
                        <input id='psnl-e-phone' name='phone' type='text' value={this.state.phone} onChange={this.handleChange} />
                    </label>
                    <div className='edit-confirm'>
                        <input id='psnl-e-submit' type='submit' value='SAVE' onClick={(e) => {
                            this.props.submit(e, 'personal', this.state);
                            this.props.toggle('editPersonal')}} />
                        <button id='psnl-e-cancel' onClick={this.handleCancel}>CANCEL</button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return this.props.isEdit ? this.createEdit() : this.createStatic();
    }
}

export default Personal;