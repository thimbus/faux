import React from 'react';
import logo from '../../logo.svg'
import SpaceIcon from './SpaceIcon';
import './SpaceList.css'

class SpaceList extends React.Component {
    render() {
        const arr = Array(+this.props.icons).fill(0);
        const icons = arr.map((_, i) => <SpaceIcon key={i} />);

        return (
            <div className="space-list-style">
                <img className="space-list-logo" src={logo} alt="React Logo"/>
                {icons}
            </div>
        )
    }
}

export default SpaceList;
