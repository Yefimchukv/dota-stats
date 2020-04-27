import React from "react";

import DataManager from "./containers/DataManager/DataManager";
import SearchById from "./components/SearchById/SearchById";
import Header from "./components/Header/Header";


function App() {
  return <div className='App'>
    <div>
    <Header/>
    <SearchById/>
    <DataManager/>
    </div>
    
  </div>
}

export default App;