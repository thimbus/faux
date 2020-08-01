import React from 'react';
import './MessageBar.css';

class MessageBar extends React.Component {
    render() {
        return (
            <div contentEditable="true" className="message-bar-style" />
        )
    }
}

export default MessageBar;
