import React, { Component } from "react";
import uniqid from 'uniqid';

// High Level Component to create components that can expand,
// be edited, and have sections deleted.
function ExpandableSection(WrappedComponent) {
    return class Expandable extends Component {
        constructor(props) {
            super(props);

            this.state = this.propsToState();

            this.handleChange = this.handleChange.bind(this);
            this.handleNewItem = this.handleNewItem.bind(this);
            this.handleRemove = this.handleRemove.bind(this);
            this.prepareSubmitEdit = this.prepareSubmitEdit.bind(this);
        }

        // Deep copy prop data for use in editing
        propsToState() {
            const toState = {};
            this.props.data.forEach(item => {
                const copy = {};
                for (const [key, value] of Object.entries(item)) {
                    copy[key] = value;
                }
                toState[item.key] = copy;
            });
            return toState;
        }

        handleChange(e, key) {
            const newState = this.state[key];
            newState[e.target.name] = e.target.value;
            this.setState({ [key]: newState });
        }

        handleRemove(key) {
            this.setState({ [key]: undefined });
        }

        handleNewItem(obj) {
            const key = uniqid();
            obj.key = key;
            this.setState({ [key]: obj });
        }

        // prepare a list of component's state to set parents prop
        // will not return blank or undefined values
        prepareSubmitEdit() {
            const toSubmit = [];
            for (const [key, value] of Object.entries(this.state)) {
                if (value && this.isValidSubmit(key))
                    toSubmit.push(value);
            }
            return toSubmit;
        }

        isValidSubmit(key) {
            for (const [k, value] of Object.entries(this.state[key])) {
                if (value === '')
                    return false;
            }
            return true;
        }

        render() {
            return <WrappedComponent
                add={this.handleNewItem}
                change={this.handleChange}
                editData={this.state}
                remove={this.handleRemove}
                prepSubmit={this.prepareSubmitEdit}
                {...this.props} />;
        }
    };
}

export default ExpandableSection;