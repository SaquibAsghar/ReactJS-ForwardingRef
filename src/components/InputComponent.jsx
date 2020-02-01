import React from "react";

const Input = ({placeholder,style,onKeyDownHandler}, ref)=>{

  return <div>
    <input 
      type= "text"
      placeholder= {placeholder}  
      style = {style}
      ref= {ref} 
      onKeyDown = {onKeyDownHandler}
    ></input>
  </div>
}

const ForwardedRef= React.forwardRef(Input)

export default ForwardedRef