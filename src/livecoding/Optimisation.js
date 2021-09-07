import React from "react";

class Optimisation extends React.Component {

    state = {
        count: 0
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        if (nextState.count === this.state.count) {
        return false
        } else {
            return true
        }
    }

    handleButtonClick = () => {
        this.setState({...this.state, count: this.state.count + 2})
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>{this.state.count}</button>
        )
    }
}


class PureOptimisation extends React.PureComponent {

    state = {
        count: 0
    }


    handleButtonClick = () => {
        this.setState({...this.state, count: this.state.count + 2})
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>Child Pure Component value: {this.state.count}</button>
        )
    }
}

const Main = () => {
    const [value, setValue] = React.useState(10)


const handleValueChange = () => {
    setValue(value + 1)
}

return (
    <div>
        <button onClick={handleValueChange}>Change parent value: {value}</button>
    </div>
)
}


export default Main