import React from 'react';
import Header from './Components/Header'
import MainWindow from './Components/MainWindow'
import DataManager from './Components/DataManager'
function App() {

  DataManager.initDataManager();

  return (
      <div className="App container col-10 justify-content-center">
        <Header/>
        <MainWindow dataManager={DataManager}/>
      </div>
  );
}

export default App;
