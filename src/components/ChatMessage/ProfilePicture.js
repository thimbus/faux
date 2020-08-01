import React from 'react';
import './ProfilePicture.css';
import logo from '../../logo.svg';

class ProfilePicture extends React.Component {
    render() {
        return (
            <div className="profile-picture-style">
                <img src={logo} alt="Author's profile icon" />
            </div>
        )
    }
}

export default ProfilePicture;
