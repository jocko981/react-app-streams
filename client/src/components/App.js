import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

// 80771956995-g3f23pgira1m63ev4rive3ht95s4hidv.apps.googleusercontent.com
// Client id


const App = () => {
    return (
        <div className="ui container">
            
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </div>
        </Router>
        </div>
    );
};


export default App;