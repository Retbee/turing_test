import React from "react";

//ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ

const ListItem = ({text}) => {
    return (
        <>
            {/*<li>{text}</li>*/}
            <input name={text}/>
        </>
    )
}

// const List = () => {
//     return (
//         <ul>
//             <ListItem/>
//             <li>First</li>
//             <li>Second</li>
//             <li>Third</li>
//         </ul>
//     )
// }



//КЛАССОВЫЙ КОМПОНЕНТ

// class ListClass extends React.Component{
//
//     state = {
//         listData: ["First list item",
//             "Second list item",
//             "Third list item",
//             "Fourth list item",
//             "Fifth list item",
//         ]
//     }
//
//     handleRemoveClick = () => {
//         this.setState({listData: this.state.listData.slice(0, -1)})
//     }
//
//     render() {
//         return (
//             <>
//                 <ul>
//                     {this.state.listData.map((elem, index) => {
//                         return <ListItem key={index} text={elem}/>
//                     })}
//                 </ul>
//                 <br/>
//                 <button onClick={this.handleRemoveClick}>Remove last element</button>
//             </>
//         )
//     }
// }

//

class ListOfArray extends React.Component {

    state = {
        inputs: [
            {id: 1, value: "First input"},
            {id: 1, value: "Second input"},
            {id: 1, value: "Third input"},
        ]
    }

    handleAddInput = () => {
        this.setState({inputs: [{id: this.state.inputs.length + 1, value: 'new element'}, ...this.state.inputs]})
    }

    render() {
        return (
            <>
                <button onClick={this.handleAddInput}>Add new input at first place</button>
                <br/>
                {this.state.input.map((elem, index) => {
                    return <ListItem key={elem.id} text={elem.value} index={index}/>
                        }
                    )
                }
            </>
        )
    }
}

const ListOfArrayFunctional = () => {

    const [inputs, setInputs] = React.useState (
        {
            inputs: [
                {id: 1, value: "First input"},
                {id: 1, value: "Second input"},
                {id: 1, value: "Third input"},
            ]
        }
    )

    const handleFunctionalAdd = () => {
        setInputs([{id: inputs.length + 1, value: "new element"}])
    }

    return (
        <>
            <button onClick={handleFunctionalAdd}>Add data</button>
            {inputs.map((elem, index) => {
                        return <ListItem key={elem.id} text={elem.value} index={index}/>
                    }
                )
            }
        </>
    )
}

// export default List;
// export default ListClass;
// export default ListOfArray;
export default ListOfArrayFunctional;