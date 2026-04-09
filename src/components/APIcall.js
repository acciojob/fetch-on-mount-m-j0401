
import React, {useEffect,useState} from "react";
import axios from "axios";

const APIcall=()=>{
    let [div,setDiv]=useState([])
   
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> setDiv(res.data))
        .catch(err=> err);
      },[])

    return (
    <div>
             
                {
            div.map((data,ind)=>
              <div key={ind}>
               <h2>{data.id}. {data.title}</h2> 
            <p>{data.body}</p>
            </div>

)
}

        


        </div>
    )
}
export default APIcall;