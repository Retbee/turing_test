import React from "react";
import Week5Day3Part1 from "./homework/week5Day3Part1";
import Week5Day3Part2 from "./homework/week5Day3Part2";
import RefComponents from "./livecoding/RefComponents";
import List from './livecoding/keys'
import RefComponent from "./livecoding/RefComponents";
import ToDo from "./pages/Todo/ToDo";

class App extends React.Component {
    render () {
        return (
            <>
                {/*<List/>*/}
                {/*<RefComponent/>*/}
                {/*<Week5Day3Part1/>*/}
                {/*<week5Day3Part2/>*/}
                {/*<ListClass/>*/}
                <h1>APP JS</h1>
                <ToDo/>
            </>
        )
    }
}

export default App;