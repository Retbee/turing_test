import React from "react";

const Button = () => {
    const [isOn, setIsOn] = React.useState(true)

    const handleUnmountLifecycle = () => {
        setIsOn(!isOn)
    }

    return (
        <>
            <button onClick={handleUnmountLifecycle}>Unmount / Mount</button>
            {isOn && <Lifecycle/>}
        </>
    )
}

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Initial value'
        }
        console.log("Initialisation")
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    handleChangeClick = () => {
        this.setState({value: "Button was clicked"})
    }


    render() {
        return (
            <>
                <button onClick={this.handleChangeClick}>Click on me</button>
                <div>
                    {this.state.value}
                </div>
            </>
        )
    }
}

export default Lifecycle

// 1. инициализация - 1 фаза жизненного цикла
// 2. сборка / mounting - DOM-elements, visualasing
// 3. обновление / updating
// 3. разборка / unmounting