import React from 'react';
import './App.css';

import SpaceList from './components/SpaceList/SpaceList';
import ChannelList from './components/ChannelList/ChannelList';

function App() {
  return (
    <div className="app-style">
      <SpaceList icons="3" />
      <ChannelList />
    </div>
  );
}

export default App;
