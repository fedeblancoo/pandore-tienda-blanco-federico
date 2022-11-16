import "./DefaultButton.css";

function DefaultButton (props) {
    return (
        <button>{props.children} </button>
    )
}

export default DefaultButton