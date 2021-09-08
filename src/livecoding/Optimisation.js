import React from "react";

class Optimisation extends React.Component {

    state = {
        count: 0
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return nextState.count === this.state.count ? false : true

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

const FuncOptimisation = () => {
    const [value, setValue] = React.useState (0)

    const handleFuncOptimisation = () => {
        setValue(value + 1)
    }

    return (
        <button onClick={handleFuncOptimisation}>Functional value: {value}</button>
    )
}

const MemoFuncOptimisation = React.memo(FuncOptimisation)

const Main = () => {

    const [value, setValue] = React.useState(10)

    const handleValueChange = () => {
    setValue(value + 1)
}

return (
    <div>
        <button onClick={handleValueChange}>Change parent value: {value}</button>
        <Optimisation/>
        <PureOptimisation/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <MemoFuncOptimisation/>
    </div>
)
}

export default Main