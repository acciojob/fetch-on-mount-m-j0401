
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
             <ol>
                {
            div.map((data,ind)=>
              <div key={ind}>
             <li style={{fontSize:"20px"}}>  <h2>{data.title}</h2> </li>
            <p>{data.body}</p>
            </div>

)
}
</ol>
        


        </div>
    )
}
export default APIcall;