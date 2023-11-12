import React from 'react'

type AuthLabelParam ={
  textLabel:string
}

const AuthLabel = ({textLabel}:AuthLabelParam) => {
  return (
    <>
      <label htmlFor={textLabel} className="block mb-2 text-base font-medium text-authgray ">
            {textLabel}
      </label>
    </>
        
  )
}

export default AuthLabel