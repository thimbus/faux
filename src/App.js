import React from 'react';
import './App.css';

import SpaceList from './components/SpaceList/SpaceList';
import ChannelList from './components/ChannelList/ChannelList';
import ChannelView from './components/ChannelView/ChannelView';

function App() {
  return (
    <div className="app-style">
      <SpaceList icons="3" />
      <ChannelList />
      <ChannelView />
    </div>
  );
}

export default App;
