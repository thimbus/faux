import React from 'react';
import './ProfilePicture.css';
import pfp from '../../chip.jpg';

class ProfilePicture extends React.Component {
    render() {
        return (
            <div className="profile-picture-style">
                <img src={pfp} alt="Author's profile icon" />
            </div>
        )
    }
}

export default ProfilePicture;
