import React from 'react';
import './MessageContent.css';

class MessageContent extends React.Component {
    render() {
        return (
            <div className="message-content-style">
                <h5>Message Author</h5>
                <p>
                    Message content here but the contents of this message span <strong>very</strong> long lol <br/>
                    they even have these <em>line breaks</em> oof
                </p>
            </div>
        )
    }
}

export default MessageContent;
