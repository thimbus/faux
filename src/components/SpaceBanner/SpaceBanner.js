import React from 'react';
import './SpaceBanner.css';

import SpaceName from './SpaceName';

class SpaceBanner extends React.Component {
    render() {
        return (
            <div className="space-banner-style">
                <SpaceName />
            </div>
        );
    }
}

export default SpaceBanner;
