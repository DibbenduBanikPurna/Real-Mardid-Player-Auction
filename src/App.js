import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Card from './Components/Card/Card';
import Match from './Components/Match/Match';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Result from './Components/Result/Result';
import TopScore from './Components/TopScore/TopScore';

function App() {
  // fetch('https://apiv3.apifootball.com/?action=get_topscorers&league_id=302&APIkey=6aaa70eacd32265ad0d4a50abb3f43d85de68f31f3067c8c01ee7dbad42e018e')
  
  return (
    <div className="App">
     
     
     
     <Router>
     <Navbar/>
       <Switch>
         <Route exact path="/"><Card/></Route>
         <Route path="/match-highlight">
           <Match/>
         </Route>
         <Route path="/match-info"> <Result/> </Route>
         <Route path="/live"> <TopScore/></Route>
       </Switch>
     </Router>
    
    
    </div>
  );
}

export default App;
