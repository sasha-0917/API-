import React, { useState ,useEffect} from 'react'

function FetchApp () {

    const[data,setdata]=useState([]);
    const apiGet=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((json) =>{
        console.log(json);
        setdata(json);
      }) 
    };

useEffect(()=>{
    apiGet();
},[])



  return (
    <div>
        My API<br/>
        <button onClick={apiGet}>Fetch API</button>
        <br/>
        {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
        <div>
            <ul>
                {data.map(item=>
                    <li key={item.id}>{item.userId},{item.title}</li>
                    )}
            </ul>
        </div>

    </div>
  )
}

export default FetchApp