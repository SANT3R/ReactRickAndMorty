import React from 'react'

export const Input = ({idName, tipo, down}) => {
  return (
    <input type={tipo} id={idName} onKeyDown={down} />
  )
}
