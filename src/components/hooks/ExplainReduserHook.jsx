import { useEffect ,useReducer,useState} from "react";


const citiesArray = ['tbilisi','hawaii','kutaisi','batumi', 'tokyo']
const colorsArr = ['red', 'green', 'blue', 'violet','purple','tomato']

const initialState = {
name : 'givi', 
age: 123, 
address: ['tokyo','hawaii'], 
requisites: {mobile: 5555555,home: 12312321, email: 'a@a.com'}
};  

const personReducer = (state,action) => {
    console.log(action)
    console.log(state)
    switch(action.type){
        case 'changeName':
            return {...state, name: action.payload}
        
        case 'changeAge':
            return {...state, age: action.payload}

        case 'changeAddress':
            return {...state, address: [...state.address,...action.payload]}

        case 'changeMobile':
            //                                remain old values    {mobile: 123456123}
            return {...state, requisites: {...state.requisites, ...action.payload}}

        case 'deleteTokyo':  
            const currentState = {...state} 
            const filteredAddresses = currentState.address.filter(element => element !== action.payload)
                                //   []
            return {...state, address: filteredAddresses}

        case 'addOrRemoveCity':
            const oldState = {...state}
            const {payload} = action;

            const cityExists = oldState.address.indexOf(payload) // -1

            if(cityExists === -1){
                oldState.address.push(payload)
            } else {
                oldState.address = oldState.address.filter(addr => addr !== payload)
            }

            return oldState

        case 'changeBackground':
            let body = document.querySelector('body');
            let intervalId = setInterval(() => {
                body.style.backgroundColor = colorsArr[Math.floor(Math.random() * colorsArr.length)]
            }, 1000)
            return {...state, intervalId}

        case 'stopBackground':
            clearInterval(state.intervalId)
            return state
             
        default:
            return state
    }
    
    // if(action.type === 'changeName'){
    //     return {
    //         ...state,
    //         name: action.payload
    //     }
    // }
    // if(action.type === 'changeAge'){
    //     return {
    //         ...state,
    //         age: action.payload
    //     }
    // }
    // if(action.type === 'changeAddress'){
        
    //     return {
    //         ...state,
    //         address: [...state.address,...action.payload]
    //     }
    // }
}

// dispatch -> reducer -> state update = (return {} || state)

export const ExplainReduserHook = () => {
    const [state, dispatch] = useReducer(personReducer, initialState)
    // const [isLoading, setIsLoading] = useState(true);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [isError, setIsError] = useState(false);
    // const [data, setData] = useState([]);

const handleNameChange = () => {
    dispatch({type : 'changeName', payload: 'nika'})
}

const handleAgeChange = () => {
    dispatch({type : 'changeAge', payload: 15})
}

const handleAddressChange = () => {
    dispatch({type : 'changeAddress', payload: ['miuxeni','brazil']})
}

const handleChangeMobileNumber = () => {
    dispatch({type : 'changeMobile', payload: {mobile: 123456123}})
}
const handleDeleteAddress = () => {
    dispatch({type : 'deleteTokyo', payload: 'tokyo'})
}

const handleRemoveOrAddCity = () => {
    const payload = citiesArray[Math.floor(Math.random() * citiesArray.length)]
    dispatch({type: 'addOrRemoveCity', payload })
    console.log(state)
    console.log(payload)
}

const handleChangeBackground = () => {

    dispatch({type: 'changeBackground'})
}
const handleStopChangeBackground = () => {

    dispatch({type: 'stopBackground'})
}



    return (
        <div>
            <h1>{state.name}(name) - {state.age}(age) - {state.address.toString()}(address)</h1>
            <button onClick={handleNameChange}>change name</button>
            <button onClick={handleAgeChange}>change age</button>
            <button onClick={handleAddressChange}>add new address</button>
            <button onClick={handleChangeMobileNumber}>add new mobile number</button>
            <button onClick={handleDeleteAddress}>remove tokyo</button>
            <button onClick={handleRemoveOrAddCity}>remove city</button>
            <button onClick={handleChangeBackground}>changee background</button>
            <button onClick={handleStopChangeBackground}>stop background</button>
        </div>
    );
}