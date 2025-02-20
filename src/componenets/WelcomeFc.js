/*simple componenet (function componenet)*/
import { useState } from "react"; 
function WelcomeFc(props){
    let [counter, setCounter] = useState(0);
    let[name,setName]=useState("Nehad");
    console.log(props);
    return(
       
    <div>
        <h1>Hello, {props.name}</h1>
        <p>age: {props.Age}</p>
        <p>title: {props.title}</p>
        <h6>{name}</h6>
        <button onClick={()=> {setName("Nehado")}}>+</button>
    </div>
    );
}
export default WelcomeFc;