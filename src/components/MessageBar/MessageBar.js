import React from 'react';
import './MessageBar.css';

class MessageBar extends React.Component {
    render() {
        return (
            <div className="message-bar-style">
                <div contentEditable="true" className="message-input-style"></div>
            </div>
        )
    }
}

export default MessageBar;
