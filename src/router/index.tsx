import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from "../components/Home";
import About from "../components/About";

const AppRouter: React.SFC<{}> = ()=>{
    return (
        <Switch>
            <Route exact path="/" component={ Home }>Home</Route>
            <Route path="/about" component={ About }>About</Route>
        </Switch>
    )
}

export default AppRouter;