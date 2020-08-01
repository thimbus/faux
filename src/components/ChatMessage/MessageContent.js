import React from 'react';
import './MessageContent.css';

class MessageContent extends React.Component {
    render() {
        return (
            <div className="message-content-style">
                <h4>Message Author</h4>
                <p>Message content here</p>
            </div>
        )
    }
}

export default MessageContent;
