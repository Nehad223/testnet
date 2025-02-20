
function Button(props){
    const btnHelder= ()=> {
    
        console.log("hello");
    }
return(
    <button className="react-btn" onMouseEnter={btnHelder}>
        {props.title}
    </button>
);

}
export default Button;