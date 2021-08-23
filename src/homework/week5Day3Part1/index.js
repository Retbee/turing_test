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

    // 2




    return (
        <>
            <ul>
                {Task}
            </ul>

            <br/>
            <br/>
            <br/>

            <ul>
                
            </ul>
        </>

    )
}



export default Week5Day3Part1