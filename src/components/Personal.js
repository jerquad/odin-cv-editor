import React, { Component } from "react";
import '../style/personal.css'


class Personal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.data.name,
            title: this.props.data.title,
            email: this.props.data.email,
            phone: this.props.data.phone
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCancel() {
        this.setState({
            name: this.props.data.name,
            title: this.props.data.title,
            email: this.props.data.email,
            phone: this.props.data.phone       
        })
        this.props.toggle();
    }

    createStatic() {
        return (
            <div id='psnl'>
                <h1 id='psnl-s-name'>{this.props.data.name}</h1>
                <h2 id='psnl-s-title'>{this.props.data.title}</h2>
                <h3 id='psnl-s-email'>{this.props.data.email}</h3>
                <h3 id='psnl-s-phone'>{this.props.data.phone}</h3>
                <button onClick={this.props.toggle}>Edit</button>
            </div>
        )
    }

    createEdit() {
        return (
            <div id='psnl'>
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
                    <input id='psnl-e-submit' type='submit' value='SAVE' onClick={(e) => this.props.submit(e, this.state)} />
                    <button id='psnl-e-cancel' onClick={this.handleCancel}>CANCEL</button>
                </form>
            </div>
        )
    }

    render() {
        return this.props.isEdit ? this.createEdit() : this.createStatic();
    }
}

export default Personal;