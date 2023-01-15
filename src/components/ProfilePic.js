import React, { Component } from 'react';
import proPic from '../img/kamen.PNG';

class ProfilePic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div 
             id='profile-pic' 
             className='section'
             onMouseEnter={() => this.props.hover('#profile-pic .toggle-edit')}
             onMouseLeave={() => this.props.hover('#profile-pic .toggle-edit')}
             >
                <img src={this.props.pic} alt='Profile Picture' />
                <input id='pic-picker' type='file' onChange={(e) => this.props.change(e)} />
                <button 
                 id='profile-button' 
                 type='file'
                 className='toggle-edit hide'
                 onClick={() => document.getElementById('pic-picker').click()}
                >
                    CHANGE
                </button>
            </div>
        )
    }
}

export default ProfilePic;