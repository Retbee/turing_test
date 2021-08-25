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
            setDataAddToEnd([...dataAddToEnd, {id: dataAddToEnd.length + 1, value: `${prompt()}`}]

        )

    }



    // 2 add to middle of array

    const[dataAddToMiddle, setDataAddToMiddle] = React.useState ([
            {id: 1, value: 'first value'},
            {id: 2, value: 'second value'},
            {id: 3, value: 'third value'},
            {id: 4, value: 'fourth value'},
            {id: 5, value: 'fifth value'},
        ])

    const ListDataToMiddle = dataAddToMiddle.map((data) => <li key={data.id}>{data.value}</li>)
    const handlePromptAddToMiddle = () => {
        setDataAddToMiddle([
            ...dataAddToMiddle.slice(0, Math.floor(dataAddToMiddle.length / 2)),
            {id: dataAddToMiddle.length + 1, value: `${prompt()}`},
            ...dataAddToMiddle.slice(Math.floor(dataAddToMiddle.length / 2))
            ]
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


            <br/>
            <br/>
            <br/>


            <ul>
                {ListDataToMiddle}
            </ul>
            <button onClick={handlePromptAddToMiddle}>Click to alert prompt and add data on middle of array</button>
        </>

    )
}

export default Week5Day3Part1