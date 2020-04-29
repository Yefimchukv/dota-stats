import React from "react";

import {SearchById} from "./components/SearchById/SearchById";
import Header from "./components/Header/Header";
import MatchInfo from "./components/MatchInfo/MatchInfo";


function App() {
  
  return <div className='App'>
    <div>
    <Header/>
    <SearchById/>
    <MatchInfo/>
    </div>
    
  </div>
}

export default App;