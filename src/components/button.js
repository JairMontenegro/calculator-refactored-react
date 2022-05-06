import React from "react";

function Button (props){
  const itsOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=') && (value !== 'C' ) && (value !== 'DEL')
  };

  return(
    <div className={`button-container ${itsOperator(props.children) ? 'operator' : null}`}>
      {props.children} 
    </div>
  );
}


export default Button






//Components have had a single opening tag but now our components can have both opening and closing tags (see line 6 "props.children")


//.trim() method that can remove spaces at the beginning or end of the string .trimEnd()