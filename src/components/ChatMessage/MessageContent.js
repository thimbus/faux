import React from 'react';
import './MessageContent.css';

class MessageContent extends React.Component {
    render() {
        return (
            <div className="message-content-style">
                <h5>Message Author</h5>
                <p>Message content here</p>
            </div>
        )
    }
}

export default MessageContent;
