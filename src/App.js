import React from 'react';
import './App.css';

import SpaceList from './components/SpaceList/SpaceList';
import Sidebar from './components/Sidebar/Sidebar';
import ChannelView from './components/ChannelView/ChannelView';

function App() {
  return (
    <div className="app-style">
      <SpaceList icons="3" />
      <Sidebar />
      <ChannelView />
    </div>
  );
}

export default App;
