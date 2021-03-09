import React, { useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import API from "../utils/API";

function Main () {
    useEffect(()=>{
        API()
        .then((data)=>{
            console.log(data);
        })
        
    });
 return(
    <EmployeeForm/>
 )   
};

export default Main;