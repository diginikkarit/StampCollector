import React from 'react';
import Header from './Components/Header'
import MainWindow from './Components/MainWindow'
import DataManager from './Components/DataManager'
function App() {

  DataManager.initDataManager();

  return (
      <div className="App container-fluid">
        <Header/>
        <MainWindow data={DataManager.stampCollection}/>
      </div>
  );
}

export default App;
