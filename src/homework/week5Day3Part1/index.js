import React from "react";


const Week5Day3Part1 = () => {
    //1


    const arrayToDisplay = [
        {id: 1, value: 'First item'},
        {id: 2, value: 'Second item'},
        {id: 3, value: 'Third item'},
    ]


    let Task = arrayToDisplay.map((elem) => {
        return (
            <li>
                <span>{elem.value}</span>
                <button onClick={() => alert(elem.value)}>Press to alert text</button>
            </li>
        )
    })





    // 2 add to start of array


    const [dataAddToStart, setDataAddToStart] = React.useState(
        []
    )

    const handlePromptAddToStart = () => {
        return (
            setDataAddToStart([{id: dataAddToStart.length + 1, value: `${prompt()}`}, ...dataAddToStart])
        )
    }

    const listDataToStart = dataAddToStart.map((data) => <li key={data.id}>{data.value}</li>)





    //2 add to end of array


    const [dataAddToEnd, setDataAddToEnd] = React.useState (
        []
    )

    const ListDataToEnd = dataAddToEnd.map((elem) => <li key={elem.id}>{elem.value}</li>)

    const handlePromptAddToEnd = () => {
            setDataAddToEnd(...dataAddToEnd, [{id: dataAddToEnd.length + 1, value: `${prompt()}`}]
            
        )

    }



    return (
        <>
            <ul>
                {Task}
            </ul>

            <br/>
            <br/>
            <br/>

            <ul>
                {listDataToStart}
            </ul>
            <button onClick={handlePromptAddToStart}>Click to alert prompt and add data on star of array</button>


            <br/>
            <br/>
            <br/>

            <ul>
                {ListDataToEnd}
            </ul>
            <button onClick={handlePromptAddToEnd}>Click to alert prompt and add data on end of array</button>
        </>

    )
}

export default Week5Day3Part1