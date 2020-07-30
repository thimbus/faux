import React from 'react';
import Fade from '../overlay/Overlay';
import './SpaceIcon.css';

class SpaceIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    click = (e) => {
        e.stopPropagation();
        this.setState({ clicked: true });
    }

    unclick = () => this.setState({ clicked: false })

    render() {
        return (
            <div onClick={this.unclick} className="space-icon-style">
                <div onClick={this.click} className="space-icon-circle"></div>
                { this.state.clicked ? <Fade fade="overlay-fadein" /> : <Fade fade="overlay-fadeout" /> }
            </div>
        )
    }
}

export default SpaceIcon;
