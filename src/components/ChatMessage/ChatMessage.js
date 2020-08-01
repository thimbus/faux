import React from 'react';
import './ChatMessage.css';
import ProfilePicture from './ProfilePicture';
import MessageContent from './MessageContent';

class ChatMessage extends React.Component {
    render() {
        return (
            <div className="chat-message-style">
                <ProfilePicture />
                <MessageContent />
            </div>
        )
    }
}

export default ChatMessage;
