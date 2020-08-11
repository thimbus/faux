import React from 'react';
import './ChatView.css';
import ChatMessage from '../ChatMessage/ChatMessage';

class ChatView extends React.Component {
    render() {
        return (
            <div className="chat-view-style">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
        )
    }
}

export default ChatView;
