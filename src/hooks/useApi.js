import { useEffect, useState } from "react";


const useApi = (url)=> {
    const[defaultValue,setDefaultValue] = useState([]);
       useEffect( ()=>{
                fetch(url).then((res)=> res.json())
                    .then((data)=> setDefaultValue(data));
                },[url] );
        return defaultValue;
}


export default useApi;