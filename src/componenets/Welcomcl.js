import React from "react";
/*class componenet*/ 
class Welcomecl extends React.Component{
    state = {
  firstName:"Nehad",
  lastName : "Shretah"
    };

    render(){
       
        console.log(this.state);
        return(
            <>
             <h1>Hello {this.props.name}</h1>
             <p>Age {this.props.Age}</p>
             <p>title {this.props.title}</p>
             <h6>created by , {this.state.firstName} {this.state.lastName}</h6>
            </>
        );
}
componentDidMount(){
   
    console.log("Mount");}}

export default Welcomecl;