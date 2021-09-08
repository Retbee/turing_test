import React from "react";
import ToDo from "./pages/Todo/ToDo";
import {Link, Route, Switch} from "react-router-dom";

class App extends React.Component {
    render () {
        return (
            <>
                <h1>APP JS</h1>
                <div>
                    <Link to="/">ToDO Page</Link>
                </div>
                <div>
                    <Link to="/test">Test Page</Link>
                </div>
                <Switch>
                    <Route path="/test">
                        <h1>Test page!</h1>
                    </Route>
                    <Route path="/">
                        <ToDo/>
                    </Route>
                </Switch>
            </>
        )
    }
}

export default App;