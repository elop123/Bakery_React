import React, { useEffect } from 'react'
import { useState } from 'react';

export function UsePost({url, body, token}){
    const[data, setData] = useState();
    const[error, setError] = useState();
    const[isLoading, setIsLoading] = useState();
    
    useEffect(()=>{
        setIsLoading(true);

        const options = {method:"POST", 
                         body:body, 
                         headers: token ? { Authorization: `Bearer ${token}` } : {},
        };

        fetch("https://api.mediehuset.net/token", options)
        .then ((res)=> res.json())
        .then((data)=> setData(data))
        .catch((err) =>setError(err))
        .finally(()=>setIsLoading(false))

    }, [url, body]);

    return{data, error, isLoading};
}