import { div } from "prelude-ls";
import React,{Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import TimeLine from "./pages/TimeLine";

class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/timeline" component={TimeLine} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
