import React from "react";

const ListItem = ({text, index}) => {
    return (
        // <li>{text} : {index}</li>
        <>
            <br/>
            <input name={text}/>
        </>
    )
}

class List extends React.Component {

    state = {
        inputs: [
            {id: 1, value: 'First input'},
            {id: 2, value: 'Second input'},
            {id: 3, value: 'Third input'},
        ]
    }

    handleAddInput = () => {
        this.setState({inputs:
                [{id: this.state.inputs.length + 1,
                    value: 'new element'},
                    ...this.state.inputs]
        }
        )
    }

    render() {
        return (
            <>
                <button onClick={this.handleAddInput}>Add new input at first place</button>

                {this.state.inputs.map((elem, index) => {
                    return <ListItem key={elem.id} text={elem.value}/>
                })}
            </>
        )
    }
}

export default List;