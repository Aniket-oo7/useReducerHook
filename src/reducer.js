const reducer = (state,action) => {
    switch(action.type){
      
        case "GET_DATA":
            return{
             ...state,
             avatar:action.payload.avatar_url,
             gists:action.payload.public_gists,
             repos:action.payload.public_repos,
             date:action.payload.created_at,
             name:action.payload.name
            };
            
            case "GET_USER":
            return {
                ...state,
                login:action.login
            }
       
    }
}
export default reducer;