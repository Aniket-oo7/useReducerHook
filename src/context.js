 import React, { useReducer } from "react";
import { createContext, useContext, useEffect} from "react"
import reducer from "./reducer";


const MyContext = React.createContext();

function MyProvider({children}){
   
    const userState = {
    avatar: " ",
    login: " ",
    name:" ",
    repos:0,
    gists:0,
    date:0
}
const [state,dispatch] = useReducer(reducer,userState)

const fetchApi = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    dispatch({type:"GET_DATA",payload:data})
  }
const searchUser = (search) => {
    dispatch({type:"GET_USER",login:search})
}

  useEffect(()=>{
    fetchApi(`https://api.github.com/users/${state.login}`)
  },[state.login])
   
    return(
        <>
        <MyContext.Provider value={{...state, searchUser}}>
            {children}
        </MyContext.Provider>
        </>
    )
}
const useGlobalContext = () => {
    return useContext(MyContext)
}

export {MyProvider, MyContext, useGlobalContext}