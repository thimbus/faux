import React from 'react';
import './Sidebar.css';
import ChannelButton from './ChannelButton';
import SpaceBanner from '../SpaceBanner/SpaceBanner';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar-style">
                <SpaceBanner />
                <ChannelButton />
                <ChannelButton />
                <ChannelButton />
            </div>
        )
    }
}

export default Sidebar;
