import { useState,useEffect } from "react";
const useBody=()=>{
    const [allResults,SetallResults]=useState([])
    const [Results,SetResults]=useState([])
    useEffect(()=>{
        burgerdata();
    },[])
    async function burgerdata(){
        try{
       const val=await fetch('https://my-burger-api.herokuapp.com/burgers')
        const data =await val.json();
        console.log(data);
        SetallResults(data);
        SetResults(data);}catch(e){
            console.log('error');
        }
    }
    return {allResults,SetallResults,SetResults,Results}
}

export default useBody;