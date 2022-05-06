import React from "react";
import '../styles-shets/clear-button.css'

const ClearButton = (props) => {
    return(
        <div className="clear_button"
        onClick = {props.mClear}>
            {props.children}
        </div>
    )
}


export default ClearButton