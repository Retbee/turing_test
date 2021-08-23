import React from "react";

const RefComponent = () => {

    const ref = React.useRef(null)

    React.useEffect(() => {
        console.log({ref})
        console.log(ref.current.clientWidth)
        ref.current.clientWidth = 1500
    })

    return (
        <div ref={ref}>Some div</div>
    )

}

export default RefComponent

class RefClassComponent extends React.Component {
    ref = React.createRef()


    componentDidMount() {
        console.log(this.ref)
        console.log(this.ref.current.clientWidth)
    }

    handleButtonClick = () => {
        this.ref.current.focus()
    }


    render() {
        return (
            <>
                <div>Some div</div>
                <div>
                    <input/>
                </div>

                <div>Some div</div>
                <div>Some div</div>

                <div>
                    <input ref={this.ref}/>
                </div>
                <div>Some div</div>
                <div>
                    <input/>
                </div>
                <div>Some div</div>
                <button onClick={this.handleButtonClick}>sacsac</button>
            </>
        )
    }
}
