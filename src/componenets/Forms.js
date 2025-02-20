import { useState } from "react";

function Forms(){
    const[name,setName]= useState("");
    const[password,setPassword] = useState("");
    const[gender,setGender] = useState();
    const namehelder=(value)=>{
        setName(value);
    }
    const passwordhelder=(value)=>{
        setPassword(value);
    }
    const genderhelder=(value)=>{
        setGender(value);
    }
    return(
   <>
   <form onSubmit={(e) => {
    e.preventDefault();
    console.log("submited");
    console.log(name);
    console.log(password);
    console.log(gender);


   }}>
    <label>Name</label>
    <input type="text" placeholder="Your Name" onChange={(event) =>{
        namehelder(event.target.value);
    } } />
    <br/>
    <label>Password</label>
    <input type="password" placeholder="Your Password" onChange={(event) =>{
        passwordhelder(event.target.value);
    } }  />
    <br />
    <label>Gender</label>
    <select  onChange={(event) =>{
        genderhelder(event.target.value);
    } } >
        <option value="male"> male</option>
        <option value="female">female</option>
    </select>
    <br />
    <button type="submit">Submit</button>
   </form>
   </>

    );
    
}
export default Forms;
