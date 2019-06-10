import React from "react"
import * as atoms from "./Card.atoms"

export function Card({
  dark = false,
  title,
  description,
  renderFooter,
  image,
}) {
  return (
    <atoms.CardWrapper dark={dark}>
      {image ? <atoms.CardImage src={image} /> : null}
      <atoms.CardContent>
        <atoms.CardTitle>{title}</atoms.CardTitle>
        <atoms.CardDescription>{description}</atoms.CardDescription>
        {renderFooter && <atoms.CardFooter>{renderFooter()}</atoms.CardFooter>}
      </atoms.CardContent>
    </atoms.CardWrapper>
  )
}
