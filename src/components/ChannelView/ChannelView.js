import React from 'react';
import './ChannelView.css';
import ChannelHeader from '../ChannelHeader/ChannelHeader';
import ChatView from '../ChatView/ChatView';
import MessageBar from '../MessageBar/MessageBar';

class ChannelView extends React.Component {
    render() {
        return (
            <div className="channel-view-style">
                <ChannelHeader />
                <ChatView />
                <MessageBar />
            </div>
        )
    }
}

export default ChannelView;
