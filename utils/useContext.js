import { createContext } from "react";
const usercontext=createContext({Results:{
    search:{
        allResults:()=>[], 
Results:()=>[],
    }

}})
export const authcontext=createContext({
    auth:{
        isAuth: false,
    SetisAuth: () => {},
    Username: '',
    SetUsername: () => {}
    }
})
usercontext.displayName="userinfo";
export default usercontext;