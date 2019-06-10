import React from "react"
import * as atoms from "./Button.atoms"

export function Button({ children, ...props }) {
  return <atoms.StyledButton {...props}>{children}</atoms.StyledButton>
}
