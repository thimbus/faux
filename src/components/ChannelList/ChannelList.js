import React from 'react';
import './ChannelList.css';
import ChannelButton from './ChannelButton';
import SpaceBanner from '../SpaceBanner/SpaceBanner';

class ChannelList extends React.Component {
    render() {
        return (
            <div className="channel-list-style">
                <SpaceBanner />
                <ChannelButton />
                <ChannelButton />
                <ChannelButton />
            </div>
        )
    }
}

export default ChannelList;
