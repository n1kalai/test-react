import { useEffect } from "react";

export const useLocalStorage = (obj) => {
    const {key, action, value} = obj;
    useEffect(() => {
        if(action === "set") {
            localStorage.setItem(key,JSON.stringify(value))
        }

        if(action === "get") {
            console.log(JSON.parse(localStorage.getItem(key)))
        }

        if(action === 'delete') {
            localStorage.removeItem(key)
        }


    },[])
}