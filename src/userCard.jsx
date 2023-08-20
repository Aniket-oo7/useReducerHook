import { useGlobalContext } from "./context";
function UserCard(){
const {login,repos,gists,avatar,date,name} = useGlobalContext();
    return(
    <div className="userCard">
         <img src={avatar} alt=" Profile "/>
          <p className="user">Username : {login}</p>
         <p className="name">Name : {name}</p>
         <p className="repo">Public Repository -: {repos}</p> 
         <p className="gists">Public Gists -: {gists}</p>
         <p className="date">Date : {date}</p>
    
    </div>
    )
}

export default UserCard;