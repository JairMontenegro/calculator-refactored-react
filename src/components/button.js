import React from "react";
import '../styles-shets/button.css'


function Button (props){
  const itsOperator = value => {
    return isNaN(value) && (value !== '.')  && (value !== 'C') && (value !== 'DEL') && (value !== '%')
  };
  const itsZero = value =>{
    return (value === '0')
  }

  return(
    <div className={`button-container ${itsOperator(props.children) ? 'operator' : null} ${itsZero(props.children) ? 'zero' : ''}`.trimEnd()}
    onClick={() => props.mClick(props.children)}>
      {props.children} 
    </div>
  );
}


export default Button






//Components have had a single opening tag but now our components can have both opening and closing tags (see line 6 "props.children")


//.trim() method that can remove spaces at the beginning or end of the string .trimEnd()