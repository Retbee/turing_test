import React from "react";

const ListItem = ({text, test}) => {
    return <li>{text} : {test}</li>
}

// const List = () => {
//     return (
//         <ul>
//             <ListItem/>
//             {/* <ListItem></ListItem> - то же самое, что и <ListItem/> */}
//             <li>First</li>
//             <li>Second</li>
//             <li>Third</li>
//         </ul>
//     )
// }

class ListClass extends React.Component {

    //используем для вывода изменений на экран
    state = {
        listData: [
            'First list item',
            'Second list item',
            'Third list item',
            'Fourth list item',
            'Fifth list item',
            'Sixth list item',
            'Last element',
        ]
    }


    handleRemoveClick = () => {
        // this.state.listData.pop() - метод не работает
        const newListData = this.state.listData.slice(0, -1)
        this.setState({listData: newListData})
    }

    render() {
            //альтернативное решение через константу array
            const array = [
                'First list item',
                'Second list item',
                'Third list item',
                'Fourth list item',
                'Fifth list item',
                'Sixth list item',
                'Last element',
            ]


            //изменения происходят в консоли, но не на экране!!!
        const handleRemoveClickUsingArray = () => {
            console.log("before: ", array)
            array.pop()
            console.log('after: ', array)
        }

        return (
            <ul>
                {/* <ListItem></ListItem> - то же самое, что и <ListItem/> */}
                {this.state.listData.map((elem, index) => {
                    return <ListItem key={index} text={elem} test={index}/>
                })}
                <button onClick={this.handleRemoveClick}>Remove last element using state</button>
                <br/>

                {/*альтернативная запись с использованием константы array*/}
                {array.map((elem, index) => {
                    return <ListItem key={index} text={elem} test={index}/>
                })}
                <button onClick={handleRemoveClickUsingArray}>Remove last element using "const array"</button>
                <br/>
            </ul>
        )
    }
}

export default ListClass

