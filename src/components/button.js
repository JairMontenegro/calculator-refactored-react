import React from "react";

function Button (props){
  return(
    <div>
      {props.children} 
    </div>
  );
}


export default Button






//Components have had a single opening tag but now our components can have both opening and closing tags (see line 6 "props.children")