import React, {createContext, useReducer, useState} from "react";

type transactionType ={
    amount: number;
    text: string
}

//initial state

const initialState  = {
    transactions :[]
}

type expenseTrackerProps ={
    children:React.ReactNode
}

// create context

export const expenseTrackerContext = createContext(initialState);


function expenseTrackerContextProvider () {
    const [textInput, setTextInput] = useState<string>('')
    const [numInput, setNumInput] = useState<number>(0)
    

    function addTransaction () {

    }
    
    return(<expenseTrackerContext.Provider>
        {props.children}
    </expenseTrackerContext.Provider>)
}

export default expenseTrackerContextProvider

