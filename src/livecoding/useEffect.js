import React from "react";

class LifecycleShort extends React.Component {

    state = {
        value: 'test data'
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    handleChangeValue = () => {
        this.setState({value: "new data"})
    }

    render() {
        return (
            <>
                <button onClick={this.handleChangeValue}>Change value</button>
                <div>{this.state.value}</div>
            </>
        )
    }
}

const LifeCycleFunctional = () => {
    const [secondValue, setSecondValue] = React.useState(0)

    // React.useEffect(() => {
    //     console.log("componentDidMount func")
    // }, [])
    //
    // React.useEffect(() => {
    //     console.log("componentDidUpdate func")
    // })
    //
    // React.useEffect(() => {
    //     console.log("first value change")
    // }, [value])

    // }
    // const handleChangeSecondValue = () => {
    //     setSecondValue(secondValue + 1)
    // }

    return (
        <>
            {/*<button onClick={handleChangeValue}>Change first value</button>*/}
            {/*<div>Firs value: {value}</div>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<button onClick={handleChangeSecondValue}>Change second value</button>*/}
            {/*<div>Second value: {secondValue}</div>*/}
            <Counter name="First"/>
            <Counter name="Second"/>
            <Counter name="Third"/>
            <Counter name="Fourth"/>
            <Counter name="Fifth"/>
        </>
    )
}

const Counter = ({name}) => {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
        console.log("componentDidMount func")
    }, [])
    React.useEffect(() => {
        console.log("componentDidUpdate func")
    })
    const handleChangeValue = () => {
        setValue(value + 1)}

    return (
        <>
            <h1>{name}</h1>
            <button onClick={handleChangeValue}>Change first value</button>
            <div>{name} Value: {value}</div>
        </>
    )
}

const Both = () => {
    return (
        <>
            <h1>Class component</h1>
            <LifecycleShort/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Functional component</h1>
            <LifeCycleFunctional/>
        </>
    )
}

export default Both