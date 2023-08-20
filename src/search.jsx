import { useGlobalContext } from "./context";
import {  useState } from "react";
function Search(){
  const {searchUser} = useGlobalContext()
  const [user,setUser] = useState(" ")
  function getUser(e){
    setUser(e.target.value)
    console.log(user)
  }
  let inputUser = user;
  // useEffect(()=>{
  //    var inputUser = user
  // },[])
  
    return(
        <>       
          <input 
           placeholder="username"
           onChange={getUser}       
           >
           </input>
          <button onClick={()=>searchUser(inputUser)}>Submit</button>  
        </>
    )
}

export default Search;