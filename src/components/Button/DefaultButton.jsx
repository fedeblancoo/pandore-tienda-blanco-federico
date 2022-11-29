import "./DefaultButton.css";

function DefaultButton (props) {
    return (
        <button className="default-button" onClick={props.onClick} >
            {props.children} 
        </button>
    )
}

export default DefaultButton