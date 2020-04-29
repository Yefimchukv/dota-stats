import React from "react";

import {SearchById} from "./components/SearchById/SearchById";
import Header from "./components/Header/Header";
import MatchInfo from "./components/MatchInfo/MatchInfo";
import DataManager from "./containers/DataManager/DataManager";


function App() {
  
  return <div className='App'>
    <div>
    <Header/>
    <SearchById/>
    <DataManager/>
    <MatchInfo/>
    </div>
    
  </div>
}

export default App;